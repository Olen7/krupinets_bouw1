import { StarRating } from '@/components/ui/StarRating'
import type { Review } from './reviews.types'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center gap-3 desktop:gap-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange font-body text-2xl text-white tablet:h-12 tablet:w-12 tablet:text-3xl desktop:h-[60px] desktop:w-[60px] desktop:text-5xl">
          {review.username.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="font-body text-sm tracking-[0.06em] text-white desktop:text-base">
            {review.updatedAt.slice(0, 10)}
          </p>
          <p className="font-body text-sm font-semibold tracking-[0.06em] text-white desktop:text-base">
            {review.username}
          </p>
        </div>
      </div>
      <StarRating value={review.grade} readOnly />
      <p className="py-2 font-body text-sm tracking-[0.06em] text-white desktop:text-base">{review.text}</p>
    </li>
  )
}
