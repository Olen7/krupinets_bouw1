import { useTranslation } from 'react-i18next'
import { Modal } from '@/components/ui/Modal'
import { useDisclosure } from '@/hooks/useDisclosure'
import { ReviewForm } from './ReviewForm'

export function ReviewModal() {
  const { isOpen, open, close } = useDisclosure(false)
  const { t } = useTranslation('reviews')

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="shrink-0 border-2 border-orange bg-transparent px-6 py-3 font-body text-base font-semibold tracking-wide text-white transition-colors hover:bg-orange"
      >
        {t('writeReviewButton')}
      </button>

      <Modal
        isOpen={isOpen}
        onClose={close}
        labelledBy="review-modal-heading"
        panelClassName="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto bg-white p-6"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-6 top-6 text-2xl leading-none text-graphite transition-colors hover:text-orange"
        >
          &times;
        </button>

        <h2
          id="review-modal-heading"
          className="mb-6 pr-8 font-heading text-2xl uppercase tracking-[0.09em] text-orange"
        >
          {t('writeReviewButton')}
        </h2>

        <ReviewForm onSuccess={close} />
      </Modal>
    </>
  )
}
