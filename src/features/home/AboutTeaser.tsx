import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { SectionHeading } from '@/components/ui/SectionHeading'
import teaserMobile1x from '@/assets/about/teaser-mobile-1x.jpg'
import teaserMobile2x from '@/assets/about/teaser-mobile-2x.jpg'
import teaserMobile4x from '@/assets/about/teaser-mobile-4x.jpg'
import teaserTablet1x from '@/assets/about/teaser-tablet-1x.jpg'
import teaserTablet2x from '@/assets/about/teaser-tablet-2x.jpg'
import teaserTablet4x from '@/assets/about/teaser-tablet-4x.jpg'
import teaserDesktop1x from '@/assets/about/teaser-desktop-1x.jpg'
import teaserDesktop2x from '@/assets/about/teaser-desktop-2x.jpg'
import teaserDesktop4x from '@/assets/about/teaser-desktop-4x.jpg'

export function AboutTeaser() {
  const { t } = useTranslation('home')

  return (
    <section className="relative overflow-hidden bg-graphite">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0"
      >
        <ResponsiveImage
          alt=""
          className="h-full w-auto max-w-none object-cover"
          sources={{
            mobile: { src1x: teaserMobile1x, src2x: teaserMobile2x, src4x: teaserMobile4x },
            tablet: { src1x: teaserTablet1x, src2x: teaserTablet2x, src4x: teaserTablet4x },
            desktop: { src1x: teaserDesktop1x, src2x: teaserDesktop2x, src4x: teaserDesktop4x },
          }}
        />
      </div>

      <div className="absolute inset-0 bg-graphite/80 tablet:w-[79.147%] desktop:w-1/2" />

      <div className="relative z-10 flex min-h-[571px] w-full flex-col mt-[20px] px-5 tablet:ml-8 tablet:min-h-[610px] tablet:w-[38.75%] tablet:px-0 desktop:ml-[120px] desktop:min-h-[680px]">
        <SectionHeading className="mb-6">{t('aboutTeaser.heading')}</SectionHeading>
        <p className="mb-7 font-body text-xl font-normal leading-normal tracking-[0.05em] text-offwhite">
          {t('aboutTeaser.text')}
        </p>
        <Button href="/about" variant="outline" className="self-start">
          {t('aboutTeaser.readMore')}
        </Button>
      </div>
    </section>
  )
}