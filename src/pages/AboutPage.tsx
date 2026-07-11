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
      <section className="relative overflow-hidden bg-graphite">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0">
          <ResponsiveImage
            alt=""
            className="h-full w-auto max-w-none object-cover"
            sources={{
              mobile: { src1x: introMobile1x, src2x: introMobile2x, src4x: introMobile4x },
              tablet: { src1x: introTablet1x, src2x: introTablet2x, src4x: introTablet4x },
              desktop: { src1x: introDesktop1x, src2x: introDesktop2x, src4x: introDesktop4x },
            }}
          />
        </div>

        <div className="absolute inset-0 bg-graphite/80 tablet:w-[82.682%] desktop:w-[53.542%]" />

        <div className="relative z-10 flex min-h-[571px] w-[98.667%] flex-col mt-[20px] px-5 max-[767px]:landscape:min-h-[100dvh] tablet:ml-8 tablet:min-h-[610px] tablet:w-[78.906%] tablet:px-0 desktop:ml-[120px] desktop:min-h-[680px] desktop:w-[45.208%]">
          <h1 className="mb-6 font-heading text-[32px] uppercase tracking-[0.09em] text-orange tablet:text-5xl desktop:text-6xl">
            {t('intro.heading')}
          </h1>
          <p className="font-body text-[18px] font-normal leading-normal tracking-[0.05em] text-offwhite w-[94.324%] tablet:w-[97.360%] desktop:w-[94.931%]">
            {t('intro.text')}
          </p>
        </div>
      </section>

      <MissionSection />
      <WhyChooseUsSection />
    </>
  )
}
