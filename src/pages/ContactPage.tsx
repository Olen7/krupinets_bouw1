import { useTranslation } from 'react-i18next'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { ContactForm } from '@/features/contact/ContactForm'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'
import { contactInfo } from '@/lib/contactInfo'
import contactMobile1x from '@/assets/contact/contact-mobile-1x.jpg'
import contactMobile2x from '@/assets/contact/contact-mobile-2x.jpg'
import contactTablet1x from '@/assets/contact/contact-tablet-1x.jpg'
import contactTablet2x from '@/assets/contact/contact-tablet-2x.jpg'
import contactDesktop1x from '@/assets/contact/contact-desktop-1x.jpg'
import contactDesktop2x from '@/assets/contact/contact-desktop-2x.jpg'

const infoLabelStyles = 'font-body text-base font-semibold tracking-[0.06em] text-graphite'
const infoValueStyles = 'font-body text-base tracking-[0.06em] text-graphite'

export function ContactPage() {
  const { t } = useTranslation('contact')
  const { t: tc } = useTranslation('common')

  return (
    <section className="relative px-5 py-10 tablet:px-8 desktop:px-[120px]">
      <ResponsiveBackground
        sources={{
          mobile: { src1x: contactMobile1x, src2x: contactMobile2x },
          tablet: { src1x: contactTablet1x, src2x: contactTablet2x },
          desktop: { src1x: contactDesktop1x, src2x: contactDesktop2x },
        }}
        className="bg-cover bg-center"
      />

      <h1 className="font-heading text-[32px] uppercase tracking-[0.06em] text-orange tablet:text-5xl desktop:text-6xl">
        {t('heading')}
      </h1>

      <div className="mt-8 flex flex-col gap-10 desktop:flex-row desktop:justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <p className={infoLabelStyles}>{tc('contactBlock.phone')}</p>
            <a href={`tel:${contactInfo.phone}`} className={infoValueStyles}>
              {contactInfo.phone}
            </a>
          </div>

          <div>
            <p className={infoLabelStyles}>{tc('contactBlock.email')}</p>
            <a href={`mailto:${contactInfo.email}`} className={infoValueStyles}>
              {contactInfo.email}
            </a>
          </div>

          <div>
            <p className={infoLabelStyles}>{tc('contactBlock.address')}</p>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={infoValueStyles}
            >
              {contactInfo.address}
            </a>
          </div>

          <SocialLinks variant="black" />
        </div>

        <div className="desktop:w-96">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
