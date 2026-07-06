import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'en' },
  { code: 'nl', label: 'nl' },
] as const

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { i18n } = useTranslation()
  const activeLanguage = i18n.language

  return (
    <ul className={`flex gap-2 ${className}`}>
      {LANGUAGES.map(({ code, label }) => (
        <li key={code}>
          <button
            type="button"
            aria-pressed={activeLanguage === code}
            onClick={() => i18n.changeLanguage(code)}
            className={`rounded-full border border-orange px-4 py-1 text-sm uppercase ${
              activeLanguage === code ? 'bg-orange text-white' : 'text-white'
            }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}
