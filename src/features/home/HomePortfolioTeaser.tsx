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
    <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:px-[120px]">
      <SectionHeading>{t('portfolioTeaser.heading')}</SectionHeading>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.anchor}
            to={`/portfolio#${tile.anchor}`}
            className="group relative overflow-hidden rounded"
          >
            <ResponsiveImage
              alt={t(`portfolioTeaser.${tile.labelKey}`)}
              sources={tile.sources}
              className="h-56 w-full object-cover"
            />
            <p className="absolute inset-x-0 bottom-0 bg-black/60 py-2 text-center font-body capitalize text-white">
              {t(`portfolioTeaser.${tile.labelKey}`)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
