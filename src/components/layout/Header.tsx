import { NavLink } from 'react-router-dom'
import logo from '@/assets/icons/logo.svg'
import burger from '@/assets/icons/burger.svg'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useUi } from '@/hooks/useUi'
import { LanguageSwitcher } from './LanguageSwitcher'

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contacts' },
] as const

export function Header() {
  const isScrolled = useScrollPosition()
  const { openMenu } = useUi()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        isScrolled ? 'bg-graphite/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 tablet:px-8 desktop:px-[120px]">
        <NavLink to="/" aria-label="Krupinec Bouw home">
          <svg width="60" height="32" className="desktop:hidden">
            <use href={`${logo}#icon-k-b-mobil-tab`} />
          </svg>
          <svg width="60" height="32" className="hidden desktop:block">
            <use href={`${logo}#icon-k-b-desctop`} />
          </svg>
        </NavLink>

        <nav className="hidden tablet:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-body text-sm text-white ${isActive ? 'text-orange' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher className="hidden tablet:flex" />

        <button
          type="button"
          onClick={openMenu}
          aria-label="Open menu"
          className="tablet:hidden"
        >
          <svg width="28" height="20">
            <use href={`${burger}#icon-menu-alt`} />
          </svg>
        </button>
      </div>
    </header>
  )
}
