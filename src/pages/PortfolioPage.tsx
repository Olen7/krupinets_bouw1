import { useTranslation } from 'react-i18next'
import { PortfolioCategorySection } from '@/features/portfolio/PortfolioCategorySection'

import cat1Mobile1x from '@/assets/portfolio/category-1-mobile-1x.jpg'
import cat1Mobile2x from '@/assets/portfolio/category-1-mobile-2x.jpg'
import cat1Tablet1x from '@/assets/portfolio/category-1-tablet-1x.jpg'
import cat1Tablet2x from '@/assets/portfolio/category-1-tablet-2x.jpg'
import cat1Desktop1x from '@/assets/portfolio/category-1-desktop-1x.jpg'
import cat1Desktop2x from '@/assets/portfolio/category-1-desktop-2x.jpg'

import cat2Mobile1x from '@/assets/portfolio/category-2-mobile-1x.jpg'
import cat2Mobile2x from '@/assets/portfolio/category-2-mobile-2x.jpg'
import cat2Tablet1x from '@/assets/portfolio/category-2-tablet-1x.jpg'
import cat2Tablet2x from '@/assets/portfolio/category-2-tablet-2x.jpg'
import cat2Desktop1x from '@/assets/portfolio/category-2-desktop-1x.jpg'
import cat2Desktop2x from '@/assets/portfolio/category-2-desktop-2x.jpg'

import cat3Mobile1x from '@/assets/portfolio/category-3-mobile-1x.jpg'
import cat3Mobile2x from '@/assets/portfolio/category-3-mobile-2x.jpg'
import cat3Tablet1x from '@/assets/portfolio/category-3-tablet-1x.jpg'
import cat3Tablet2x from '@/assets/portfolio/category-3-tablet-2x.jpg'
import cat3Desktop1x from '@/assets/portfolio/category-3-desktop-1x.jpg'
import cat3Desktop2x from '@/assets/portfolio/category-3-desktop-2x.jpg'

export function PortfolioPage() {
  const { t, i18n } = useTranslation('portfolio')
  const locale = i18n.language

  return (
    <>
      <h1 className="py-10 text-center font-heading text-[32px] uppercase tracking-[0.09em] text-orange tablet:text-[48px] tablet:tracking-[0.06em] desktop:text-[60px] desktop:tracking-[0.05em]">
        {t('heading')}
      </h1>

      <PortfolioCategorySection
        id="portfolio-bathrooms"
        title={t('categories.bathrooms')}
        category="bathrooms"
        locale={locale}
        heroSources={{
          mobile: { src1x: cat1Mobile1x, src2x: cat1Mobile2x },
          tablet: { src1x: cat1Tablet1x, src2x: cat1Tablet2x },
          desktop: { src1x: cat1Desktop1x, src2x: cat1Desktop2x },
        }}
      />
      <PortfolioCategorySection
        id="portfolio-general"
        title={t('categories.general')}
        category="general-renovation"
        locale={locale}
        reverse
        heroSources={{
          mobile: { src1x: cat2Mobile1x, src2x: cat2Mobile2x },
          tablet: { src1x: cat2Tablet1x, src2x: cat2Tablet2x },
          desktop: { src1x: cat2Desktop1x, src2x: cat2Desktop2x },
        }}
      />
      <PortfolioCategorySection
        id="portfolio-dormer"
        title={t('categories.dormer')}
        category="dormer-constructions"
        locale={locale}
        reverse
        heroSources={{
          mobile: { src1x: cat3Mobile1x, src2x: cat3Mobile2x },
          tablet: { src1x: cat3Tablet1x, src2x: cat3Tablet2x },
          desktop: { src1x: cat3Desktop1x, src2x: cat3Desktop2x },
        }}
      />
    </>
  )
}
