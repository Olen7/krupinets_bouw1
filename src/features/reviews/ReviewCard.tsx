import { StarRating } from '@/components/ui/StarRating'
import type { Review } from './reviews.types'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center gap-5">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-orange font-body text-5xl text-white">
          {review.username.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="font-body text-base tracking-[0.06em] text-white">
            {review.updatedAt.slice(0, 10)}
          </p>
          <p className="font-body text-base font-semibold tracking-[0.06em] text-white">
            {review.username}
          </p>
        </div>
      </div>
      <StarRating value={review.grade} readOnly />
      <p className="py-2 font-body text-base tracking-[0.06em] text-white">{review.text}</p>
    </li>
  )
}
