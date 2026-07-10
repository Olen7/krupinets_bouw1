import { httpClient } from '@/lib/api/httpClient'
import type { StrapiCollectionResponse, StrapiImageRelation, StrapiSingleResponse } from '@/types/strapi'
import { transformCloudinaryUrl } from './cloudinary'
import { parseKeyFeatures, parseParagraphs } from './projectContentParser'
import type {
  PortfolioAttributes,
  PortfolioDetail,
  PortfolioListItem,
  PortfolioTranslatableAttributes,
  PortfolioTranslation,
} from './portfolio.types'

function toTranslation(attrs: PortfolioTranslatableAttributes): PortfolioTranslation {
  return {
    name: attrs.name,
    location: attrs.location,
    projectSize: attrs.project_size,
    scopeOfWork: parseParagraphs(attrs.scope_of_work),
    keyFeatures: parseKeyFeatures(attrs.key_features),
  }
}

function pickGridImageUrl(image: StrapiImageRelation): string {
  const attrs = image.data?.attributes
  if (!attrs) return ''
  const url = attrs.formats?.large?.url ?? attrs.url
  return transformCloudinaryUrl(url)
}

// Cards without a display_order sort after ones that have it, keeping their relative order.
function compareByDisplayOrder(a: number | null, b: number | null): number {
  if (a === null && b === null) return 0
  if (a === null) return 1
  if (b === null) return -1
  return a - b
}

export async function fetchPortfolios(locale: string): Promise<PortfolioListItem[]> {
  const result = await httpClient.get<StrapiCollectionResponse<PortfolioAttributes>>(
    `/portfolios?locale=${locale}&populate=*`,
  )

  return [...result.data]
    .sort((a, b) => compareByDisplayOrder(a.attributes.display_order, b.attributes.display_order))
    .map((entry) => ({
      id: entry.id,
      name: entry.attributes.name,
      type: entry.attributes.type,
      imageUrl: pickGridImageUrl(entry.attributes.main_image),
    }))
}

export async function fetchPortfolio(id: string): Promise<PortfolioDetail> {
  const result = await httpClient.get<StrapiSingleResponse<PortfolioAttributes>>(`/portfolios/${id}?populate=*`)

  if (!result.data) {
    throw new Error(`Project ${id} not found`)
  }

  const attrs = result.data.attributes
  const translations: Partial<Record<string, PortfolioTranslation>> = {
    [attrs.locale]: toTranslation(attrs),
  }

  for (const localization of attrs.localizations?.data ?? []) {
    translations[localization.attributes.locale] = toTranslation(localization.attributes)
  }

  return {
    id: result.data.id,
    defaultLocale: attrs.locale,
    translations,
    mainImageUrl: attrs.main_image.data?.attributes.url ?? '',
    additionalImageUrls: attrs.additional_images.data.map((image) => image.attributes.url),
  }
}
