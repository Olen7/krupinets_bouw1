import { useTranslation } from 'react-i18next'
import { useDisclosure } from '@/hooks/useDisclosure'
import { ProjectCard } from './ProjectCard'
import type { PortfolioListItem } from './portfolio.types'

export function PortfolioGrid({ items }: { items: PortfolioListItem[] }) {
  const { isOpen, toggle } = useDisclosure(false)
  const { t } = useTranslation('portfolio')

  if (items.length === 0) {
    return <p className="font-body text-white">{t('empty')}</p>
  }

  const visible = items.slice(0, 3)
  const rest = items.slice(3)

  return (
    <div className="flex flex-col items-center gap-6">
      <ul className="grid w-full grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
        {visible.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
        {isOpen && rest.map((item) => <ProjectCard key={item.id} item={item} />)}
      </ul>

      {rest.length > 0 && (
        <button
          type="button"
          onClick={toggle}
          className="font-body text-sm text-orange underline underline-offset-4"
        >
          {isOpen ? t('seeLess') : t('seeMore')}
        </button>
      )}
    </div>
  )
}
