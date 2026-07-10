import type { StrapiImageCollectionRelation, StrapiImageRelation } from '@/types/strapi'

export type PortfolioCategory = 'bathrooms' | 'general-renovation' | 'dormer-constructions'

export interface PortfolioTranslatableAttributes {
  name: string
  locale: string
  location: string
  project_size: string
  scope_of_work: string
  key_features: string
}

export interface PortfolioAttributes extends PortfolioTranslatableAttributes {
  type: PortfolioCategory
  display_order: number | null
  main_image: StrapiImageRelation
  additional_images: StrapiImageCollectionRelation
  localizations?: {
    data: { id: number; attributes: PortfolioTranslatableAttributes }[]
  }
}

export interface PortfolioListItem {
  id: number
  name: string
  type: PortfolioCategory
  imageUrl: string
}

export interface KeyFeature {
  title: string
  text: string
}

export interface PortfolioTranslation {
  name: string
  location: string
  projectSize: string
  scopeOfWork: string[]
  keyFeatures: KeyFeature[]
}

export interface PortfolioDetail {
  id: number
  defaultLocale: string
  translations: Partial<Record<string, PortfolioTranslation>>
  mainImageUrl: string
  additionalImageUrls: string[]
}
