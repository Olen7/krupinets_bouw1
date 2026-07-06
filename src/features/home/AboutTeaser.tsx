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
    <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:flex-row desktop:items-center desktop:px-[120px]">
      <ResponsiveImage
        alt="About Krupinec Bouw"
        className="w-full rounded object-cover desktop:w-1/2"
        sources={{
          mobile: { src1x: teaserMobile1x, src2x: teaserMobile2x, src4x: teaserMobile4x },
          tablet: { src1x: teaserTablet1x, src2x: teaserTablet2x, src4x: teaserTablet4x },
          desktop: { src1x: teaserDesktop1x, src2x: teaserDesktop2x, src4x: teaserDesktop4x },
        }}
      />
      <div className="flex flex-col gap-4 desktop:w-1/2">
        <SectionHeading>{t('aboutTeaser.heading')}</SectionHeading>
        <p className="font-body text-white">{t('aboutTeaser.text')}</p>
        <Button href="/about" variant="outline" className="self-start">
          {t('aboutTeaser.readMore')}
        </Button>
      </div>
    </section>
  )
}
