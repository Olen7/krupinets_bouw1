import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ResponsiveImage, type ResponsiveImageProps } from '@/components/ui/ResponsiveImage'
import { SectionHeading } from '@/components/ui/SectionHeading'

import cat1Mobile1x from '@/assets/portfolio/category-1-mobile-1x.jpg'
import cat1Mobile2x from '@/assets/portfolio/category-1-mobile-2x.jpg'
import cat1Mobile4x from '@/assets/portfolio/category-1-mobile-4x.jpg'
import cat1Tablet1x from '@/assets/portfolio/category-1-tablet-1x.jpg'
import cat1Tablet2x from '@/assets/portfolio/category-1-tablet-2x.jpg'
import cat1Tablet4x from '@/assets/portfolio/category-1-tablet-4x.jpg'
import teaser1Desktop1x from '@/assets/portfolio/teaser-1-desktop-1x.jpg'
import teaser1Desktop2x from '@/assets/portfolio/teaser-1-desktop-2x.jpg'
import teaser1Desktop4x from '@/assets/portfolio/teaser-1-desktop-4x.jpg'

import cat2Mobile1x from '@/assets/portfolio/category-2-mobile-1x.jpg'
import cat2Mobile2x from '@/assets/portfolio/category-2-mobile-2x.jpg'
import cat2Mobile4x from '@/assets/portfolio/category-2-mobile-4x.jpg'
import cat2Tablet1x from '@/assets/portfolio/category-2-tablet-1x.jpg'
import cat2Tablet2x from '@/assets/portfolio/category-2-tablet-2x.jpg'
import cat2Tablet4x from '@/assets/portfolio/category-2-tablet-4x.jpg'
import teaser2Desktop1x from '@/assets/portfolio/teaser-2-desktop-1x.jpg'
import teaser2Desktop2x from '@/assets/portfolio/teaser-2-desktop-2x.jpg'
import teaser2Desktop4x from '@/assets/portfolio/teaser-2-desktop-4x.jpg'

import cat3Mobile1x from '@/assets/portfolio/category-3-mobile-1x.jpg'
import cat3Mobile2x from '@/assets/portfolio/category-3-mobile-2x.jpg'
import cat3Mobile4x from '@/assets/portfolio/category-3-mobile-4x.jpg'
import cat3Tablet1x from '@/assets/portfolio/category-3-tablet-1x.jpg'
import cat3Tablet2x from '@/assets/portfolio/category-3-tablet-2x.jpg'
import cat3Tablet4x from '@/assets/portfolio/category-3-tablet-4x.jpg'
import teaser3Desktop1x from '@/assets/portfolio/teaser-3-desktop-1x.jpg'
import teaser3Desktop2x from '@/assets/portfolio/teaser-3-desktop-2x.jpg'
import teaser3Desktop4x from '@/assets/portfolio/teaser-3-desktop-4x.jpg'

interface TeaserTile {
  labelKey: string
  anchor: string
  sources: ResponsiveImageProps['sources']
}

// Desktop layout: General/Dormer stacked on the left, Bathrooms large on the right
const DESKTOP_PLACEMENT: Record<string, string> = {
  general: 'desktop:col-start-1 desktop:row-start-1',
  dormer: 'desktop:col-start-1 desktop:row-start-2',
  bathrooms: 'desktop:col-start-2 desktop:row-start-1 desktop:row-span-2',
}

// Desktop: four-corner gradient "spotlight" behind the tile label from the legacy design
const DESKTOP_LABEL_BACKGROUND = [
  'linear-gradient(to bottom right, #2B2B2B 30%, rgba(39, 39, 39, 0) 50%) bottom right / 50% 50% no-repeat',
  'linear-gradient(to bottom left, #2B2B2B 30%, rgba(39, 39, 39, 0) 50%) bottom left / 50% 50% no-repeat',
  'linear-gradient(to top left, #2B2B2B 30%, rgba(39, 39, 39, 0) 50%) top left / 50% 50% no-repeat',
  'linear-gradient(to top right, #2B2B2B 30%, rgba(39, 39, 39, 0) 50%) top right / 50% 50% no-repeat',
].join(', ')

// Mobile/tablet: radial gradient "halo" behind the tile label from the legacy design
const COMPACT_LABEL_BACKGROUND =
  'radial-gradient(50% 50% at 50% 50%, #272727 42.71%, rgba(39, 39, 39, 0) 100%)'

const tiles: TeaserTile[] = [
  {
    labelKey: 'bathrooms',
    anchor: 'portfolio-bathrooms',
    sources: {
      mobile: { src1x: cat1Mobile1x, src2x: cat1Mobile2x, src4x: cat1Mobile4x },
      tablet: { src1x: cat1Tablet1x, src2x: cat1Tablet2x, src4x: cat1Tablet4x },
      desktop: { src1x: teaser1Desktop1x, src2x: teaser1Desktop2x, src4x: teaser1Desktop4x },
    },
  },
  {
    labelKey: 'general',
    anchor: 'portfolio-general',
    sources: {
      mobile: { src1x: cat2Mobile1x, src2x: cat2Mobile2x, src4x: cat2Mobile4x },
      tablet: { src1x: cat2Tablet1x, src2x: cat2Tablet2x, src4x: cat2Tablet4x },
      desktop: { src1x: teaser2Desktop1x, src2x: teaser2Desktop2x, src4x: teaser2Desktop4x },
    },
  },
  {
    labelKey: 'dormer',
    anchor: 'portfolio-dormer',
    sources: {
      mobile: { src1x: cat3Mobile1x, src2x: cat3Mobile2x, src4x: cat3Mobile4x },
      tablet: { src1x: cat3Tablet1x, src2x: cat3Tablet2x, src4x: cat3Tablet4x },
      desktop: { src1x: teaser3Desktop1x, src2x: teaser3Desktop2x, src4x: teaser3Desktop4x },
    },
  },
]

export function HomePortfolioTeaser() {
  const { t } = useTranslation('home')

  return (
    <section className="flex flex-col gap-7 pb-0 pt-[60px] tablet:gap-10 ">
      <SectionHeading className="text-center">{t('portfolioTeaser.heading')}</SectionHeading>
      <div className="grid grid-cols-1 gap-4 desktop:grid-cols-2 desktop:grid-rows-2">
        {tiles.map((tile) => (
          <Link
            key={tile.anchor}
            to={`/portfolio#${tile.anchor}`}
            className={`group relative overflow-hidden rounded ${DESKTOP_PLACEMENT[tile.labelKey]}`}
          >
            <ResponsiveImage
              alt={t(`portfolioTeaser.${tile.labelKey}`)}
              sources={tile.sources}
              className="h-56 w-full object-cover tablet:h-[352px] desktop:h-full"
            />
            {/* Halo shadow behind the label: radial on mobile/tablet, four-corner on desktop */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-20 w-64 -translate-x-1/2 -translate-y-1/2 tablet:h-[129px] tablet:w-[712px] desktop:hidden"
              style={{ background: COMPACT_LABEL_BACKGROUND }}
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-[220px] w-[500px] -translate-x-1/2 -translate-y-1/2 desktop:block"
              style={{ background: DESKTOP_LABEL_BACKGROUND }}
            />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-[32px] uppercase tracking-[3px] text-offwhite tablet:text-[48px] tablet:leading-[60px] desktop:text-[60px] desktop:leading-[75px]">
              {t(`portfolioTeaser.${tile.labelKey}`)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
