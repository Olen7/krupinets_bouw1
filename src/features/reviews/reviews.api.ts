import { httpClient } from '@/lib/api/httpClient'
import type { StrapiCollectionResponse, StrapiSingleResponse } from '@/types/strapi'
import type { Review, ReviewAttributes, SubmitReviewInput } from './reviews.types'

export async function fetchVerifiedReviews(): Promise<Review[]> {
  const result = await httpClient.get<StrapiCollectionResponse<ReviewAttributes>>(
    '/reviews?filters[verified][$eq]=true',
  )

  return result.data.map((entry) => ({ id: entry.id, ...entry.attributes }))
}

export async function submitReview(input: SubmitReviewInput): Promise<Review> {
  const result = await httpClient.post<StrapiSingleResponse<ReviewAttributes>>('/reviews', {
    data: input,
  })

  if (!result.data) {
    throw new Error('Review submission did not return the created review')
  }

  return { id: result.data.id, ...result.data.attributes }
}
