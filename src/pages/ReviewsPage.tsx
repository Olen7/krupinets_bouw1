import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ReviewList } from '@/features/reviews/ReviewList'
import { ReviewModal } from '@/features/reviews/ReviewModal'

export function ReviewsPage() {
  const { t } = useTranslation('reviews')

  return (
    <section className="flex flex-col items-center gap-8 px-5 py-10 tablet:px-8 desktop:px-[120px]">
      <SectionHeading>{t('heading')}</SectionHeading>
      <ReviewModal />
      <div className="w-full max-w-2xl">
        <ReviewList />
      </div>
    </section>
  )
}
