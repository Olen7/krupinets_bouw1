import { useTranslation } from 'react-i18next'
import { ReviewList } from '@/features/reviews/ReviewList'
import { ReviewModal } from '@/features/reviews/ReviewModal'

export function ReviewsPage() {
  const { t } = useTranslation('reviews')

  return (
    <section className="bg-graphite px-5 py-5 tablet:px-8 desktop:px-[120px]">
      <div className="mb-9 flex items-center justify-between gap-4">
        <h1 className="font-heading text-[32px] uppercase tracking-[3px] text-white">
          {t('heading')}
        </h1>
        <ReviewModal />
      </div>

      <ReviewList />
    </section>
  )
}
