import { StarRating } from '@/components/ui/StarRating'
import type { Review } from './reviews.types'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="flex flex-col gap-2 rounded border border-placeholder p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange font-heading text-white">
          {review.username.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="font-body text-sm text-placeholder">{review.updatedAt.slice(0, 10)}</p>
          <p className="font-body text-white">{review.username}</p>
        </div>
      </div>
      <StarRating value={review.grade} readOnly />
      <p className="font-body text-white">{review.text}</p>
    </li>
  )
}
