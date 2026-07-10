import type { ReactNode } from 'react'

export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-heading text-3xl tracking-wide text-orange tablet:text-5xl desktop:text-6xl uppercase ${className}`}>
      {children}
    </h2>
  )
}
