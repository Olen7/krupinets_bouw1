import { contactInfo } from '@/lib/contactInfo'

export function ContactBlock({
  heading = 'Contacts',
  variant = 'white',
}: {
  heading?: string
  variant?: 'white' | 'dark'
}) {
  const textColor = variant === 'dark' ? 'text-graphite' : 'text-white'

  return (
    <div>
      <p className={`font-body text-lg ${textColor}`}>{heading}</p>
      <ul className={`mt-2 flex flex-col gap-1 text-sm ${textColor}`}>
        <li>
          <a href={`tel:${contactInfo.phone}`}>Phone: {contactInfo.phone}</a>
        </li>
        <li>
          <a href={`mailto:${contactInfo.email}`}>E-mail: {contactInfo.email}</a>
        </li>
        <li>
          <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer nofollow">
            Address: {contactInfo.address}
          </a>
        </li>
      </ul>
    </div>
  )
}
