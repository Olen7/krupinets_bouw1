import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'en' },
  { code: 'nl', label: 'nl' },
] as const

export function LanguageSwitcher({
  className = '',
  isScrolled = false,
}: {
  className?: string
  isScrolled?: boolean
}) {
  const { i18n } = useTranslation()
  const activeLanguage = i18n.language

  const inactiveColor = isScrolled
    ? 'text-white hover:text-orange'
    : 'text-graphite hover:text-orange'

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {LANGUAGES.map(({ code, label }, index) => (
        <li key={code} className="flex items-center gap-3">
          {index > 0 && (
            <span className={isScrolled ? 'text-white' : 'text-graphite'} aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            aria-pressed={activeLanguage === code}
            onClick={() => i18n.changeLanguage(code)}
            className={`text-sm uppercase transition-colors ${
              activeLanguage === code ? 'text-orange' : inactiveColor
            }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}
