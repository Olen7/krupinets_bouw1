interface BreakpointSources {
  src1x: string
  src2x: string
}

export interface ResponsiveBackgroundProps {
  sources: {
    mobile: BreakpointSources
    tablet: BreakpointSources
    desktop?: BreakpointSources
  }
  className?: string
}

function toStyle({ src1x, src2x }: BreakpointSources) {
  return { backgroundImage: `image-set(url(${src1x}) 1x, url(${src2x}) 2x)` }
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
