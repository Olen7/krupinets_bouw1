import { useTranslation } from 'react-i18next'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { MissionSection } from '@/features/about/MissionSection'
import { WhyChooseUsSection } from '@/features/about/WhyChooseUsSection'
import introMobile1x from '@/assets/about/intro-mobile-1x.jpg'
import introMobile2x from '@/assets/about/intro-mobile-2x.jpg'
import introMobile4x from '@/assets/about/intro-mobile-4x.jpg'
import introTablet1x from '@/assets/about/intro-tablet-1x.jpg'
import introTablet2x from '@/assets/about/intro-tablet-2x.jpg'
import introTablet4x from '@/assets/about/intro-tablet-4x.jpg'
import introDesktop1x from '@/assets/about/intro-desktop-1x.jpg'
import introDesktop2x from '@/assets/about/intro-desktop-2x.jpg'
import introDesktop4x from '@/assets/about/intro-desktop-4x.jpg'

export function AboutPage() {
  const { t } = useTranslation('about')

  return (
    <>
      <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:flex-row desktop:items-center desktop:px-[120px]">
        <ResponsiveImage
          alt="Krupinec Bouw team at work"
          className="w-full rounded object-cover desktop:w-1/2"
          sources={{
            mobile: { src1x: introMobile1x, src2x: introMobile2x, src4x: introMobile4x },
            tablet: { src1x: introTablet1x, src2x: introTablet2x, src4x: introTablet4x },
            desktop: { src1x: introDesktop1x, src2x: introDesktop2x, src4x: introDesktop4x },
          }}
        />
        <div className="flex flex-col gap-4 desktop:w-1/2">
          <h1 className="font-heading text-4xl text-orange">{t('intro.heading')}</h1>
          <p className="font-body text-white">{t('intro.text')}</p>
        </div>
      </section>

      <MissionSection />
      <WhyChooseUsSection />
    </>
  )
}
