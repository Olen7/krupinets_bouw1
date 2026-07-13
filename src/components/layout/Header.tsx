import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '@/assets/icons/logo.svg'
import burger from '@/assets/icons/burger.svg'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useUi } from '@/hooks/useUi'
import { LanguageSwitcher } from './LanguageSwitcher'

export const NAV_LINKS = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'aboutUs' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/reviews', key: 'reviews' },
  { to: '/contact', key: 'contacts' },
] as const

export function Header() {
  const isScrolled = useScrollPosition()
  const { openMenu } = useUi()
  const { t } = useTranslation('common')
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-[var(--header-h)] transition-colors ${
        isScrolled ? 'bg-graphite/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex h-full items-center justify-between px-5 tablet:px-8 desktop:px-[119px]">
        <NavLink to="/" aria-label="Krupinec Bouw home">
          <svg width="60" height="32" className="desktop:hidden">
            <use href={`${logo}#icon-k-b-mobil-tab`} />
          </svg>
          <svg width="60" height="32" className="hidden desktop:block">
            <use href={`${logo}#icon-k-b-desctop`} />
          </svg>
        </NavLink>

        <nav className="hidden tablet:ml-auto tablet:mr-auto tablet:block desktop:mr-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-body text-sm transition-colors border-b-2 hover:text-orange hover:border-orange ${
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

        <LanguageSwitcher className="hidden tablet:flex" isScrolled={isScrolled || !isHomePage} />

        <button type="button" onClick={openMenu} aria-label="Open menu" className="tablet:hidden">
          <svg width="28" height="20">
            <use href={`${burger}#icon-menu-alt`} />
          </svg>
        </button>
      </div>
    </header>
  )
}
