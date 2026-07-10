import { useEffect, useState, type MouseEvent } from 'react'

export interface LightboxImage {
  url: string
  alt: string
}

export interface LightboxProps {
  images: LightboxImage[]
  startIndex: number
  onClose: () => void
}

export function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex)

  const goPrev = () => setIndex((current) => (current - 1 + images.length) % images.length)
  const goNext = () => setIndex((current) => (current + 1) % images.length)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- goPrev/goNext close over images.length only, which doesn't change while open
  }, [onClose])

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  const current = images[index]

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events -- mouse-only backdrop dismiss; Escape key above already covers keyboard users
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={handleBackdropClick}
    >
      <div role="dialog" aria-modal="true" className="relative flex max-h-full max-w-full items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 text-3xl leading-none text-white transition-colors hover:text-orange tablet:-top-12"
        >
          &times;
        </button>

        {images.length > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center text-4xl leading-none text-white transition-colors hover:text-orange tablet:-left-12"
          >
            &#8249;
          </button>
        )}

        <img
          src={current.url}
          alt={current.alt}
          className="max-h-[85vh] max-w-full rounded object-contain"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center text-4xl leading-none text-white transition-colors hover:text-orange tablet:-right-12"
          >
            &#8250;
          </button>
        )}

        {images.length > 1 && (
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-sm text-white">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  )
}
