import type { StrapiImageCollectionRelation, StrapiImageRelation } from '@/types/strapi'

export type PortfolioCategory = 'bathrooms' | 'general-renovation' | 'dormer-constructions'

export interface PortfolioAttributes {
  name: string
  type: PortfolioCategory
  description: string
  main_image: StrapiImageRelation
  additional_images: StrapiImageCollectionRelation
}

export interface PortfolioListItem {
  id: number
  name: string
  type: PortfolioCategory
  imageUrl: string
}

export interface PortfolioDetail {
  id: number
  name: string
  mainImageUrl: string
  description: string
  additionalImageUrls: string[]
}
