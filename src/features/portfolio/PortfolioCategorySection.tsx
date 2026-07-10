import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ResponsiveBackground, type ResponsiveBackgroundProps } from '@/components/ui/ResponsiveBackground'
import { useProjectsByCategory } from './useProjectsQuery'
import { PortfolioGrid } from './PortfolioGrid'
import type { PortfolioCategory, PortfolioListItem } from './portfolio.types'

const CHUNK_SIZE = 3

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size))
  }
  return chunks
}

export interface PortfolioCategorySectionProps {
  id: string
  title: string
  category: PortfolioCategory
  locale: string
  heroSources: ResponsiveBackgroundProps['sources']
  reverse?: boolean
}

const titleVignette = {
  background:
    'linear-gradient(to bottom right, #2B2B2B 30%, rgba(39, 39, 39, 0.00) 50%) bottom right / 50% 50% no-repeat,' +
    'linear-gradient(to bottom left, #2B2B2B 30%, rgba(39, 39, 39, 0.00) 50%) bottom left / 50% 50% no-repeat,' +
    'linear-gradient(to top left, #2B2B2B 30%, rgba(39, 39, 39, 0.00) 50%) top left / 50% 50% no-repeat,' +
    'linear-gradient(to top right, #2B2B2B 30%, rgba(39, 39, 39, 0.00) 50%) top right / 50% 50% no-repeat',
}

type PhotoVariant = 'big' | 'small' | 'half'

const VARIANT_SIZE: Record<PhotoVariant, string> = {
  big: 'h-[355px] w-[calc(51%-8px)] tablet:h-[544px] tablet:w-[calc(48.5%-8px)] desktop:h-[674px] desktop:w-[calc(60%-8px)]',
  small:
    'h-[169.5px] w-[calc(47%-8px)] tablet:h-[264px] tablet:w-[calc(48.5%-8px)] desktop:min-h-[329px] desktop:w-[calc(39%-8px)]',
  half: 'h-[355px] w-[calc(50%-8px)] tablet:h-[544px] desktop:h-[674px]',
}

function CollagePhoto({ item, variant }: { item: PortfolioListItem; variant: PhotoVariant }) {
  return (
    <Link to={`/portfolio/${item.id}`} className={`group relative block overflow-hidden ${VARIANT_SIZE[variant]}`}>
      <img
        src={item.imageUrl}
        alt={item.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform group-hover:scale-105"
      />
      <span className="absolute bottom-0 left-1/2 flex h-[45px] w-[101%] -translate-x-1/2 items-center justify-center bg-gradient-to-t from-[#151515] to-transparent px-2 text-center font-body text-[18px] font-semibold tracking-[0.06em] text-white tablet:h-[70px] tablet:text-2xl desktop:text-[26px]">
        {item.name}
      </span>
    </Link>
  )
}

export function PortfolioCategorySection({
  id,
  title,
  category,
  locale,
  heroSources,
  reverse = false,
}: PortfolioCategorySectionProps) {
  const { data, isLoading, isError } = useProjectsByCategory(locale, category)
  const { t } = useTranslation('portfolio')
  const [visibleChunks, setVisibleChunks] = useState(1)

  const count = data?.length ?? 0
  const collageItems = data ?? []
  const chunks = count >= 3 ? chunk(collageItems, CHUNK_SIZE) : []
  const isExpanded = chunks.length > 0 && visibleChunks >= chunks.length

  function handleToggleChunks() {
    if (isExpanded) {
      setVisibleChunks(1)
    } else {
      setVisibleChunks((prev) => prev + 1)
    }
  }

  return (
    <section
      id={id}
      className="mb-5 flex scroll-mt-14 flex-col gap-4 pb-10 tablet:scroll-mt-[72px] desktop:scroll-mt-[98px]"
    >
      <div className="relative flex h-[220px] items-center justify-center tablet:h-[342px] desktop:h-[440px]">
        <ResponsiveBackground sources={heroSources} className="bg-cover bg-center" />
        <h2
          style={titleVignette}
          className="relative z-10 px-6 py-4 text-center font-heading text-[32px] uppercase tracking-[3px] text-white tablet:text-[48px] tablet:tracking-[0.06em] desktop:text-[60px] desktop:tracking-[0.05em]"
        >
          {title}
        </h2>
      </div>

      <div className="px-5 tablet:px-8 desktop:px-[120px]">
        {isLoading && <p className="font-body text-white">{t('loading')}</p>}
        {isError && <p className="font-body text-orange">{t('error')}</p>}
        {data && count === 0 && <PortfolioGrid items={data} />}
      </div>

      {count === 1 && (
        <div className="flex h-[355px] gap-4 tablet:h-[544px] desktop:h-[674px]">
          <CollagePhoto item={collageItems[0]} variant="half" />
        </div>
      )}

      {count === 2 && (
        <div className="flex h-[355px] justify-center gap-4 tablet:h-[544px] desktop:h-[674px]">
          <CollagePhoto item={collageItems[0]} variant="half" />
          <CollagePhoto item={collageItems[1]} variant="half" />
        </div>
      )}

      {count >= 3 && (
        <div className="flex flex-col gap-6">
          {chunks.slice(0, visibleChunks).map((chunkItems, index) => {
            const chunkReverse = index % 2 === 0 ? reverse : !reverse
            const [big, ...smalls] = chunkItems
            const ordered = chunkReverse ? [...smalls, big] : [big, ...smalls]
            const alignClass =
              smalls.length === 0 ? (chunkReverse ? 'content-end' : 'content-start') : 'content-between'

            return (
              <div
                key={big.id}
                className={`flex h-[355px] flex-col flex-wrap ${alignClass} justify-between gap-4 tablet:h-[544px] desktop:h-[674px]`}
              >
                {ordered.map((item) => (
                  <CollagePhoto key={item.id} item={item} variant={item.id === big.id ? 'big' : 'small'} />
                ))}
              </div>
            )
          })}

          {chunks.length > 1 && (
            <div className="w-full px-5 tablet:px-8 desktop:px-[120px]">
              <button
                type="button"
                onClick={handleToggleChunks}
                className="h-12 w-full border-2 border-orange font-body text-base font-semibold tracking-[0.06em] text-white transition-colors hover:bg-orange active:scale-[0.98] desktop:h-16 desktop:text-2xl desktop:tracking-[0.04em]"
              >
                {isExpanded ? t('seeLess') : t('seeMore')}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
