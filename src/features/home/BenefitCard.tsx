import benefitSprite from '@/assets/icons/benefit.svg'
import benefitSpriteDesktop from '@/assets/icons/benefit-desktop.svg'

export interface BenefitCardProps {
  icon: 'checkmark' | 'carbon-tool-box' | 'ph-star' | 'octicon-people'
  label: string
}

export function BenefitCard({ icon, label }: BenefitCardProps) {
  return (
    <li className="flex flex-col items-center gap-3 rounded border border-orange p-6 text-center transition-colors hover:bg-orange hover:[--color1:#fff]">
      <svg width="72" height="72" className="desktop:hidden">
        <use href={`${benefitSprite}#icon-${icon}`} />
      </svg>
      <svg width="101" height="100" className="hidden desktop:block">
        <use href={`${benefitSpriteDesktop}#icon-${icon}`} />
      </svg>
      <p className="font-body text-white first-letter:uppercase">{label}</p>
    </li>
  )
}
