import { useTranslation } from 'react-i18next'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import whyMobile1x from '@/assets/about/whychoose-mobile-1x.jpg'
import whyMobile2x from '@/assets/about/whychoose-mobile-2x.jpg'
import whyMobile4x from '@/assets/about/whychoose-mobile-4x.jpg'
import whyTablet1x from '@/assets/about/whychoose-tablet-1x.jpg'
import whyTablet2x from '@/assets/about/whychoose-tablet-2x.jpg'
import whyTablet4x from '@/assets/about/whychoose-tablet-4x.jpg'
import whyDesktop1x from '@/assets/about/whychoose-desktop-1x.jpg'
import whyDesktop2x from '@/assets/about/whychoose-desktop-2x.jpg'
import whyDesktop4x from '@/assets/about/whychoose-desktop-4x.jpg'

const REASON_KEYS = ['expertise', 'quality', 'innovation', 'clientCentric'] as const

export function WhyChooseUsSection() {
  const { t } = useTranslation('about')

  return (
    <section className="relative overflow-hidden bg-graphite">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0">
        <ResponsiveImage
          alt=""
          className="h-full w-auto max-w-none object-cover"
          sources={{
            mobile: { src1x: whyMobile1x, src2x: whyMobile2x, src4x: whyMobile4x },
            tablet: { src1x: whyTablet1x, src2x: whyTablet2x, src4x: whyTablet4x },
            desktop: { src1x: whyDesktop1x, src2x: whyDesktop2x, src4x: whyDesktop4x },
          }}
        />
      </div>

      <div className="absolute inset-0 bg-graphite/80 tablet:w-[82.682%] desktop:w-[53.542%]" />

      <div className="relative z-10 mt-[20px] flex min-h-[571px] w-[98.667%] flex-col gap-10 px-5 max-[767px]:landscape:min-h-[100dvh] tablet:ml-8 tablet:min-h-[610px] tablet:w-[78.906%] tablet:px-0 desktop:ml-[120px] desktop:min-h-[680px] desktop:w-[45.208%]">
        <h2 className="font-heading text-[32px] uppercase tracking-[0.09em] text-orange tablet:text-5xl desktop:text-6xl">
          {t('whyChooseUs.heading')}
        </h2>
        <ul className="flex flex-col gap-3 w-[94.324%] tablet:w-[97.360%] desktop:w-[94.931%]">
          {REASON_KEYS.map((key) => (
            <li key={key} className="font-body text-[18px] font-normal leading-normal tracking-[0.05em] text-offwhite">
              <span className="font-semibold">{t(`whyChooseUs.${key}.title`)}:</span>{' '}
              {t(`whyChooseUs.${key}.text`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
