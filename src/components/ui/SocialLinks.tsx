import socialSprite from '@/assets/icons/social.svg'
import socialSpriteBlack from '@/assets/icons/social-black.svg'
import { contactInfo } from '@/lib/contactInfo'

const ICON_NAMES: Record<(typeof contactInfo.socialLinks)[number]['name'], string> = {
  facebook: 'icon-facebook',
  instagram: 'icon-insta',
  tiktok: 'icon-primary',
  linkedin: 'icon-linkedin',
}

export function SocialLinks({
  variant = 'white',
  className = '',
}: {
  variant?: 'white' | 'black'
  className?: string
}) {
  const sprite = variant === 'black' ? socialSpriteBlack : socialSprite

  return (
    <ul className={`flex gap-4 ${className}`}>
      <li>
        <a href={`mailto:${contactInfo.email}`} aria-label="Email">
          <svg width="24" height="24">
            <use href={`${sprite}#icon-mail`} />
          </svg>
        </a>
      </li>
      {contactInfo.socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={link.name}
          >
            <svg width="24" height="24">
              <use href={`${sprite}#${ICON_NAMES[link.name]}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
