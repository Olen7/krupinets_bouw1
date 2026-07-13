import type { StrapiCollectionResponse, StrapiSingleResponse } from '@/types/strapi'
import type { ReviewAttributes } from '@/features/reviews/reviews.types'

export function makeReview(id: number, overrides: Partial<ReviewAttributes> = {}) {
  return {
    id,
    attributes: {
      username: `User ${id}`,
      text: 'Great work, highly recommended!',
      grade: 5,
      updatedAt: '2026-01-15T10:00:00.000Z',
      ...overrides,
    },
  }
}

export const reviewsListFixture: StrapiCollectionResponse<ReviewAttributes> = {
  data: [1, 2, 3, 4, 5, 6, 7].map((id) => makeReview(id)),
  meta: {},
}

export function reviewSubmitResponseFixture(
  input: Omit<ReviewAttributes, 'updatedAt'>,
): StrapiSingleResponse<ReviewAttributes> {
  return { data: { id: 99, attributes: { ...input, updatedAt: '2026-01-20T10:00:00.000Z' } }, meta: {} }
}
