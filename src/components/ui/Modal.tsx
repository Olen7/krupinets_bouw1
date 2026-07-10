import { useEffect, type MouseEvent, type ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  labelledBy?: string
  panelClassName?: string
}

const defaultPanelClassName = 'max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-graphite p-6 text-white'

export function Modal({ isOpen, onClose, children, labelledBy, panelClassName }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events -- mouse-only backdrop dismiss; Escape key above already covers keyboard users
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={panelClassName ?? defaultPanelClassName}
      >
        {children}
      </div>
    </div>
  )
}
