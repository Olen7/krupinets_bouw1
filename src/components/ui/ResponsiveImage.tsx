interface BreakpointSources {
  src1x: string
  src2x: string
  src4x: string
}

export interface ResponsiveImageProps {
  sources: {
    mobile: BreakpointSources
    tablet: BreakpointSources
    desktop: BreakpointSources
  }
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

function toSrcSet({ src1x, src2x, src4x }: BreakpointSources): string {
  return `${src1x} 1x, ${src2x} 2x, ${src4x} 4x`
}

export function ResponsiveImage({ sources, alt, className, loading = 'lazy' }: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(min-width: 1400px)" srcSet={toSrcSet(sources.desktop)} />
      <source media="(min-width: 768px)" srcSet={toSrcSet(sources.tablet)} />
      <img
        src={sources.mobile.src1x}
        srcSet={toSrcSet(sources.mobile)}
        alt={alt}
        className={className}
        loading={loading}
      />
    </picture>
  )
}
