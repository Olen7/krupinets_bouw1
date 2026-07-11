import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'
import heroMobile1x from '@/assets/hero/hero-mobile-1x.jpg'
import heroMobile2x from '@/assets/hero/hero-mobile-2x.jpg'
import heroTablet1x from '@/assets/hero/hero-tablet-1x.jpg'
import heroTablet2x from '@/assets/hero/hero-tablet-2x.jpg'
import heroDesktop1x from '@/assets/hero/hero-desktop-1x.jpg'
import heroDesktop2x from '@/assets/hero/hero-desktop-2x.jpg'
import heroMobile4x from '@/assets/hero/hero-mobile-4x.jpg'
import heroTablet4x from '@/assets/hero/hero-tablet-4x.jpg'
import heroDesktop4x from '@/assets/hero/hero-desktop-4x.jpg'

export function HeroSection() {
  const { t } = useTranslation('home')

  return (
    <section className="relative flex h-[844px] items-center tablet:h-[700px] desktop:h-[800px] max-[767px]:landscape:h-[100dvh]">
      <ResponsiveBackground
        sources={{
          mobile: { src1x: heroMobile1x, src2x: heroMobile2x, src3x: heroMobile4x },
          tablet: { src1x: heroTablet1x, src2x: heroTablet2x, src3x: heroTablet4x },
          desktop: { src1x: heroDesktop1x, src2x: heroDesktop2x, src3x: heroDesktop4x },
        }}
        className="bg-cover bg-center"
      />
      <div className="mx-auto max-w-screen-lg flex flex-col items-center gap-4 px-[18px] tablet:px-8 desktop:px-[120px]">
        <h1 className="font-heading text-4xl text-graphite tablet:text-6xl desktop:text-7xl">
          KRUPINEC BOUW
        </h1>
        <p className="font-body text-lg text-graphite tablet:text-2xl">{t('hero.subtitle')}</p>
        <Button href="/contact">{t('hero.consultationButton')}</Button>
      </div>
    </section>
  )
}
