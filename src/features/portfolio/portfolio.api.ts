import { httpClient } from '@/lib/api/httpClient'
import type { StrapiCollectionResponse, StrapiImageRelation, StrapiSingleResponse } from '@/types/strapi'
import { transformCloudinaryUrl } from './cloudinary'
import type { PortfolioAttributes, PortfolioDetail, PortfolioListItem } from './portfolio.types'

function pickGridImageUrl(image: StrapiImageRelation): string {
  const attrs = image.data?.attributes
  if (!attrs) return ''
  const url = attrs.formats?.large?.url ?? attrs.url
  return transformCloudinaryUrl(url)
}

export async function fetchPortfolios(locale: string): Promise<PortfolioListItem[]> {
  const result = await httpClient.get<StrapiCollectionResponse<PortfolioAttributes>>(
    `/portfolios?locale=${locale}&populate=*`,
  )

  return result.data.map((entry) => ({
    id: entry.id,
    name: entry.attributes.name,
    type: entry.attributes.type,
    imageUrl: pickGridImageUrl(entry.attributes.main_image),
  }))
}

export async function fetchPortfolio(id: string, locale: string): Promise<PortfolioDetail> {
  const result = await httpClient.get<StrapiSingleResponse<PortfolioAttributes>>(
    `/portfolios/${id}?locale=${locale}&populate=*`,
  )

  if (!result.data) {
    throw new Error(`Project ${id} not found`)
  }

  const attrs = result.data.attributes

  return {
    id: result.data.id,
    name: attrs.name,
    mainImageUrl: attrs.main_image.data?.attributes.url ?? '',
    description: attrs.description,
    additionalImageUrls: attrs.additional_images.data.map((image) => image.attributes.url),
  }
}
