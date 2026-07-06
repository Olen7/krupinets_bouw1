import { SectionHeading } from '@/components/ui/SectionHeading'
import { ReviewList } from '@/features/reviews/ReviewList'
import { ReviewModal } from '@/features/reviews/ReviewModal'

export function ReviewsPage() {
  return (
    <section className="flex flex-col items-center gap-8 px-5 py-10 tablet:px-8 desktop:px-[120px]">
      <SectionHeading>Reviews</SectionHeading>
      <ReviewModal />
      <div className="w-full max-w-2xl">
        <ReviewList />
      </div>
    </section>
  )
}
