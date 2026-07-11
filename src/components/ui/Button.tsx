import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const baseStyles =
  'inline-flex items-center justify-center px-6 py-3 font-body text-base font-semibold tracking-wide transition-transform active:scale-90'

const variantStyles = {
  primary: 'bg-orange text-white hover:bg-white hover:text-orange border-2 border-orange',
  outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-graphite',
} as const

type Variant = keyof typeof variantStyles

interface CommonProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor

    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
