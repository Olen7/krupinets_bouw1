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
  data: [makeReview(1), makeReview(2), makeReview(3)],
  meta: {},
}

export function reviewSubmitResponseFixture(
  input: Omit<ReviewAttributes, 'updatedAt'>,
): StrapiSingleResponse<ReviewAttributes> {
  return { data: { id: 99, attributes: { ...input, updatedAt: '2026-01-20T10:00:00.000Z' } }, meta: {} }
}
