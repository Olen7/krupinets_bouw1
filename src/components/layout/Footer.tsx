import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '@/assets/icons/logo.svg'
import copyright from '@/assets/icons/copyright.svg'
import footerMobile1x from '@/assets/layout/footer-mobile-1x.jpg'
import footerMobile2x from '@/assets/layout/footer-mobile-2x.jpg'
import footerMobile4x from '@/assets/layout/footer-mobile-4x.jpg'
import footerTablet1x from '@/assets/layout/footer-tablet-1x.jpg'
import footerTablet2x from '@/assets/layout/footer-tablet-2x.jpg'
import footerTablet4x from '@/assets/layout/footer-tablet-4x.jpg'
import { NAV_LINKS } from './Header'
import { ContactBlock } from './ContactBlock'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { ConsultationForm } from '@/features/contact/ConsultationForm'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="relative isolate  bg-graphite text-white">
      <ResponsiveBackground
        sources={{
          mobile: { src1x: footerMobile1x, src2x: footerMobile2x, src4x: footerMobile4x },
          tablet: { src1x: footerTablet1x, src2x: footerTablet2x, src4x: footerTablet4x },
        }}
        className="bg-cover bg-center"
      />
      <div className="absolute inset-0 -z-10 bg-graphite/80" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 tablet:px-8 desktop:px-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 tablet:grid-cols-2 tablet:gap-x-6 tablet:gap-y-10 desktop:grid-cols-3">
          <div className="order-1 flex flex-col gap-6">
            <NavLink to="/" aria-label="Krupinec Bouw home">
              <svg width="60" height="32">
                <use href={`${logo}#icon-k-b-mobil-tab`} />
              </svg>
            </NavLink>

            <nav>
              <ul className="flex flex-col gap-2">
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
          </div>

          {/* Tablet: full-width row below nav/contacts. Desktop: middle column, next to nav and contacts. */}
          <div className="order-3 w-full tablet:col-span-2 desktop:order-2 desktop:col-span-1">
            {/* Mobile shows just a button linking to the full contact form; tablet+ shows the form inline */}
            <div className="hidden tablet:block">
              <ConsultationForm />
            </div>
            <Button href="/contact" className="w-full tablet:hidden">
              {t('consultation.submit')}
            </Button>
          </div>

          <div className="order-2 flex flex-col gap-4 desktop:order-3 ">
            <ContactBlock />
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-5 pb-10 pt-6 tablet:px-8 desktop:px-[120px] desktop:text-center">
        <div className="flex items-center gap-2 text-sm text-orange desktop:mx-auto desktop:h-[30px] desktop:w-[433px] desktop:justify-center desktop:rounded-full desktop:bg-graphite/70">
          <span>{t('footer.copyright')}</span>
          <svg width="20" height="20">
            <use href={`${copyright}#icon-copyrighte`} />
          </svg>
          <span>{new Date().getFullYear()}</span>
          <span>{t('footer.allRightsReserved')}</span>
        </div>
        <p className="h-9 w-[214px] font-body text-[12px] leading-[18px] tracking-[1px] text-offwhite desktop:mx-auto desktop:h-auto desktop:w-auto desktop:whitespace-nowrap">
          {t('footer.unsplash')}
        </p>
      </div>
    </footer>
  )
}
