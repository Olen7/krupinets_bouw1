import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import close from '@/assets/icons/close.svg'
import { useUi } from '@/hooks/useUi'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NAV_LINKS } from './Header'

export function MobileMenu() {
  const { isMenuOpen, closeMenu } = useUi()
  const { t } = useTranslation('common')

  if (!isMenuOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-graphite tablet:hidden">
      <div className="flex justify-end p-5">
        <button type="button" onClick={closeMenu} aria-label="Close menu">
          <svg width="24" height="24">
            <use href={`${close}#icon-exs`} />
          </svg>
        </button>
      </div>

      <nav>
        <ul className="flex flex-col items-center gap-6 py-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-body text-lg transition-colors border-b-2 hover:text-orange hover:border-orange ${
                    isActive ? 'text-orange border-orange' : 'text-white border-transparent'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <LanguageSwitcher className="justify-center" isScrolled />
    </div>
  )
}
