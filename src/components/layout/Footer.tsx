import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '@/assets/icons/logo.svg'
import copyright from '@/assets/icons/copyright.svg'
import footerMobile1x from '@/assets/layout/footer-mobile-1x.jpg'
import footerMobile2x from '@/assets/layout/footer-mobile-2x.jpg'
import footerTablet1x from '@/assets/layout/footer-tablet-1x.jpg'
import footerTablet2x from '@/assets/layout/footer-tablet-2x.jpg'
import { NAV_LINKS } from './Header'
import { ContactBlock } from './ContactBlock'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { ConsultationForm } from '@/features/contact/ConsultationForm'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="relative bg-graphite text-white">
      <ResponsiveBackground
        sources={{
          mobile: { src1x: footerMobile1x, src2x: footerMobile2x },
          tablet: { src1x: footerTablet1x, src2x: footerTablet2x },
        }}
        className="bg-cover bg-center"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 tablet:px-8 desktop:px-[120px]">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex flex-col gap-6">
            <NavLink to="/" aria-label="Krupinec Bouw home">
              <svg width="60" height="32">
                <use href={`${logo}#icon-k-b-mobil-tab`} />
              </svg>
            </NavLink>

            <nav>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} className="font-body text-sm text-white">
                      {t(`nav.${link.key}`)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <ContactBlock />
            <SocialLinks />
          </div>

          <div className="w-full max-w-sm">
            <ConsultationForm />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-placeholder pt-6">
          <div className="flex items-center gap-2 text-sm">
            <span>{t('footer.copyright')}</span>
            <svg width="20" height="20">
              <use href={`${copyright}#icon-copyrighte`} />
            </svg>
            <span>{new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-placeholder">{t('footer.unsplash')}</p>
        </div>
      </div>
    </footer>
  )
}
