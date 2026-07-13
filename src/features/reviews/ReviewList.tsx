import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReviewsQuery } from './useReviewsQuery'
import { ReviewCard } from './ReviewCard'

const PAGE_SIZE = 5

export function ReviewList() {
  const { data, isLoading, isError } = useReviewsQuery()
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const { t } = useTranslation('reviews')

  if (isLoading) {
    return <p className="font-body text-white">{t('loading')}</p>
  }

  if (isError) {
    return <p className="font-body text-orange">{t('error')}</p>
  }

  if (!data || data.length === 0) {
    return <p className="font-body text-white">{t('empty')}</p>
  }

  const isFullyExpanded = visibleCount >= data.length
  const visibleReviews = data.slice(0, visibleCount)

  const handleToggle = () => {
    setVisibleCount(isFullyExpanded ? PAGE_SIZE : Math.min(visibleCount + PAGE_SIZE, data.length))
  }

  return (
    <div className="flex flex-col">
      <ul className="flex w-full flex-col gap-10">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>

      {data.length > PAGE_SIZE && (
        <button
          type="button"
          onClick={handleToggle}
          className="mt-9 self-start border-2 border-orange bg-transparent px-6 py-3 font-body text-base font-semibold tracking-wide text-white transition-colors hover:bg-orange"
        >
          {isFullyExpanded ? t('showLess') : t('showMore')}
        </button>
      )}
    </div>
  )
}
