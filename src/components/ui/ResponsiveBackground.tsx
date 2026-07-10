interface BreakpointSources {
  src1x: string
  src2x: string
  src3x?: string
  src4x?: string
}

export interface ResponsiveBackgroundProps {
  sources: {
    mobile: BreakpointSources
    tablet: BreakpointSources
    desktop?: BreakpointSources
  }
  className?: string
}

function toStyle({ src1x, src2x, src3x, src4x }: BreakpointSources) {
  const set = [
    `url(${src1x}) 1x`,
    `url(${src2x}) 2x`,
    src3x && `url(${src3x}) 3x`,
    src4x && `url(${src4x}) 4x`,
  ]
    .filter(Boolean)
    .join(', ')

  return { backgroundImage: `image-set(${set})` }
}

/** Absolutely-positioned background layers that swap per breakpoint. Parent needs `relative`. */
export function ResponsiveBackground({ sources, className = '' }: ResponsiveBackgroundProps) {
  return (
    <>
      <div
        className={`absolute inset-0 -z-10 tablet:hidden ${className}`}
        style={toStyle(sources.mobile)}
      />
      <div
        className={`absolute inset-0 -z-10 hidden tablet:block ${sources.desktop ? 'desktop:hidden' : ''} ${className}`}
        style={toStyle(sources.tablet)}
      />
      {sources.desktop && (
        <div
          className={`absolute inset-0 -z-10 hidden desktop:block ${className}`}
          style={toStyle(sources.desktop)}
        />
      )}
    </>
  )
}