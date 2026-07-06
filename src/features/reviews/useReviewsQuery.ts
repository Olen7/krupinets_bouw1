import { useQuery } from '@tanstack/react-query'
import { fetchVerifiedReviews } from './reviews.api'

export const reviewsQueryKey = ['reviews', 'verified'] as const

export function useReviewsQuery() {
  return useQuery({
    queryKey: reviewsQueryKey,
    queryFn: fetchVerifiedReviews,
    staleTime: 60_000,
  })
}
