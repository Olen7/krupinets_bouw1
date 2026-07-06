import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { useDisclosure } from '@/hooks/useDisclosure'
import { ReviewForm } from './ReviewForm'

export function ReviewModal() {
  const { isOpen, open, close } = useDisclosure(false)

  return (
    <>
      <Button onClick={open}>Write a review</Button>

      <Modal isOpen={isOpen} onClose={close} labelledBy="review-modal-heading">
        <h2 id="review-modal-heading" className="font-heading text-2xl text-orange">
          Write a review
        </h2>
        <div className="mt-4">
          <ReviewForm onSuccess={close} />
        </div>
      </Modal>
    </>
  )
}
