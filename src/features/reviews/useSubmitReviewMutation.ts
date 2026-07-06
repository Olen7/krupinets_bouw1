import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitReview } from './reviews.api'
import { reviewsQueryKey } from './useReviewsQuery'
import type { Review, SubmitReviewInput } from './reviews.types'

export function useSubmitReviewMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: SubmitReviewInput) => submitReview(input),
    onSuccess: (newReview) => {
      queryClient.setQueryData<Review[]>(reviewsQueryKey, (current) =>
        current ? [newReview, ...current] : [newReview],
      )
      queryClient.invalidateQueries({ queryKey: reviewsQueryKey })
    },
  })
}
