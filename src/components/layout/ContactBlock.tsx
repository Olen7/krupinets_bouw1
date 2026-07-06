import { useTranslation } from 'react-i18next'
import { contactInfo } from '@/lib/contactInfo'

export function ContactBlock({ variant = 'white' }: { variant?: 'white' | 'dark' }) {
  const { t } = useTranslation('common')
  const textColor = variant === 'dark' ? 'text-graphite' : 'text-white'

  return (
    <div>
      <p className={`font-body text-lg ${textColor}`}>{t('contactBlock.heading')}</p>
      <ul className={`mt-2 flex flex-col gap-1 text-sm ${textColor}`}>
        <li>
          <a href={`tel:${contactInfo.phone}`}>
            {t('contactBlock.phone')} {contactInfo.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${contactInfo.email}`}>
            {t('contactBlock.email')} {contactInfo.email}
          </a>
        </li>
        <li>
          <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer nofollow">
            {t('contactBlock.address')} {contactInfo.address}
          </a>
        </li>
      </ul>
    </div>
  )
}
