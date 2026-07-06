const LANGUAGES = [
  { code: 'en', label: 'en' },
  { code: 'nl', label: 'nl' },
] as const

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  // Stub for Phase 1: renders the en/nl buttons with no-op switching.
  // Phase 5 wires this up to react-i18next's i18n.changeLanguage().
  const activeLanguage = 'en'

  return (
    <ul className={`flex gap-2 ${className}`}>
      {LANGUAGES.map(({ code, label }) => (
        <li key={code}>
          <button
            type="button"
            aria-pressed={activeLanguage === code}
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
