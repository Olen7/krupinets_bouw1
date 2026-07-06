import { useTranslation } from 'react-i18next'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { useDisclosure } from '@/hooks/useDisclosure'
import { ReviewForm } from './ReviewForm'

export function ReviewModal() {
  const { isOpen, open, close } = useDisclosure(false)
  const { t } = useTranslation('reviews')

  return (
    <>
      <Button onClick={open}>{t('writeReviewButton')}</Button>

      <Modal isOpen={isOpen} onClose={close} labelledBy="review-modal-heading">
        <h2 id="review-modal-heading" className="font-heading text-2xl text-orange">
          {t('writeReviewButton')}
        </h2>
        <div className="mt-4">
          <ReviewForm onSuccess={close} />
        </div>
      </Modal>
    </>
  )
}
