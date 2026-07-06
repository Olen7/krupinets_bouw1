export interface StrapiEntity<T> {
  id: number
  attributes: T
}

export interface StrapiCollectionResponse<T> {
  data: StrapiEntity<T>[]
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: StrapiEntity<T> | null
  meta: Record<string, unknown>
}

export interface StrapiImageAttributes {
  url: string
  formats?: {
    large?: { url: string }
    medium?: { url: string }
    small?: { url: string }
    thumbnail?: { url: string }
  }
}

export interface StrapiImageRelation {
  data: StrapiEntity<StrapiImageAttributes> | null
}

export interface StrapiImageCollectionRelation {
  data: StrapiEntity<StrapiImageAttributes>[]
}
