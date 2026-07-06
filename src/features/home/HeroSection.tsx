import { Button } from '@/components/ui/Button'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'
import heroMobile1x from '@/assets/hero/hero-mobile-1x.jpg'
import heroMobile2x from '@/assets/hero/hero-mobile-2x.jpg'
import heroTablet1x from '@/assets/hero/hero-tablet-1x.jpg'
import heroTablet2x from '@/assets/hero/hero-tablet-2x.jpg'
import heroDesktop1x from '@/assets/hero/hero-desktop-1x.jpg'
import heroDesktop2x from '@/assets/hero/hero-desktop-2x.jpg'

export function HeroSection() {
  return (
    <section className="relative flex h-[600px] items-center tablet:h-[700px] desktop:h-[800px]">
      <ResponsiveBackground
        sources={{
          mobile: { src1x: heroMobile1x, src2x: heroMobile2x },
          tablet: { src1x: heroTablet1x, src2x: heroTablet2x },
          desktop: { src1x: heroDesktop1x, src2x: heroDesktop2x },
        }}
        className="bg-cover bg-center"
      />
      <div className="flex flex-col items-start gap-4 px-5 tablet:px-8 desktop:px-[120px]">
        <h1 className="font-heading text-4xl text-white tablet:text-6xl desktop:text-7xl">
          KRUPINEC BOUW
        </h1>
        <p className="font-body text-lg text-white tablet:text-2xl">
          realize your dreams with us
        </p>
        <Button href="/contact">Consultation</Button>
      </div>
    </section>
  )
}
