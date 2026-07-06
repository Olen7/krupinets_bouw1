import { useTranslation } from 'react-i18next'
import { ResponsiveBackground, type ResponsiveBackgroundProps } from '@/components/ui/ResponsiveBackground'
import { useProjectsByCategory } from './useProjectsQuery'
import { PortfolioGrid } from './PortfolioGrid'
import type { PortfolioCategory } from './portfolio.types'

export interface PortfolioCategorySectionProps {
  id: string
  title: string
  category: PortfolioCategory
  locale: string
  heroSources: ResponsiveBackgroundProps['sources']
}

export function PortfolioCategorySection({
  id,
  title,
  category,
  locale,
  heroSources,
}: PortfolioCategorySectionProps) {
  const { data, isLoading, isError } = useProjectsByCategory(locale, category)
  const { t } = useTranslation('portfolio')

  return (
    <section id={id} className="flex flex-col gap-6 pb-10">
      <div className="relative flex h-56 items-center justify-center">
        <ResponsiveBackground sources={heroSources} className="bg-cover bg-center" />
        <h2 className="font-heading text-3xl capitalize text-white">{title}</h2>
      </div>

      <div className="px-5 tablet:px-8 desktop:px-[120px]">
        {isLoading && <p className="font-body text-white">{t('loading')}</p>}
        {isError && <p className="font-body text-orange">{t('error')}</p>}
        {data && <PortfolioGrid items={data} />}
      </div>
    </section>
  )
}
