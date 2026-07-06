import { useTranslation } from 'react-i18next'
import { ContactBlock } from '@/components/layout/ContactBlock'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { ContactForm } from '@/features/contact/ContactForm'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'
import contactMobile1x from '@/assets/contact/contact-mobile-1x.jpg'
import contactMobile2x from '@/assets/contact/contact-mobile-2x.jpg'
import contactTablet1x from '@/assets/contact/contact-tablet-1x.jpg'
import contactTablet2x from '@/assets/contact/contact-tablet-2x.jpg'
import contactDesktop1x from '@/assets/contact/contact-desktop-1x.jpg'
import contactDesktop2x from '@/assets/contact/contact-desktop-2x.jpg'

export function ContactPage() {
  const { t } = useTranslation('contact')

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

      <h1 className="font-heading text-4xl capitalize text-orange">{t('heading')}</h1>

      <div className="mt-8 flex flex-col gap-8 rounded bg-offwhite p-6 desktop:flex-row desktop:justify-between">
        <div className="flex flex-col gap-4">
          <ContactBlock variant="dark" />
          <SocialLinks variant="black" />
        </div>

        <div className="desktop:w-96">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
