import { useState } from 'react'
import { useReviewsQuery } from './useReviewsQuery'
import { ReviewCard } from './ReviewCard'

const PAGE_SIZE = 2

export function ReviewList() {
  const { data, isLoading, isError } = useReviewsQuery()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  if (isLoading) {
    return <p className="font-body text-white">Loading reviews…</p>
  }

  if (isError) {
    return <p className="font-body text-orange">Couldn&apos;t load reviews right now.</p>
  }

  if (!data || data.length === 0) {
    return <p className="font-body text-white">No reviews yet — be the first to write one!</p>
  }

  const isFullyExpanded = visibleCount >= data.length
  const visibleReviews = data.slice(0, visibleCount)

  const handleToggle = () => {
    setVisibleCount(isFullyExpanded ? PAGE_SIZE : Math.min(visibleCount + PAGE_SIZE, data.length))
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <ul className="flex w-full flex-col gap-4">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>

      {data.length > PAGE_SIZE && (
        <button
          type="button"
          onClick={handleToggle}
          className="font-body text-sm text-orange underline underline-offset-4"
        >
          {isFullyExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}
