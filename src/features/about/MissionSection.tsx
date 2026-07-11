import { useTranslation } from 'react-i18next'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import missionMobile1x from '@/assets/about/mission-mobile-1x.jpg'
import missionMobile2x from '@/assets/about/mission-mobile-2x.jpg'
import missionMobile4x from '@/assets/about/mission-mobile-4x.jpg'
import missionTablet1x from '@/assets/about/mission-tablet-1x.jpg'
import missionTablet2x from '@/assets/about/mission-tablet-2x.jpg'
import missionTablet4x from '@/assets/about/mission-tablet-4x.jpg'
import missionDesktop1x from '@/assets/about/mission-desktop-1x.jpg'
import missionDesktop2x from '@/assets/about/mission-desktop-2x.jpg'
import missionDesktop4x from '@/assets/about/mission-desktop-4x.jpg'

export function MissionSection() {
  const { t } = useTranslation('about')

  return (
    <section className="relative overflow-hidden bg-graphite">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0">
        <ResponsiveImage
          alt=""
          className="h-full w-auto max-w-none object-cover"
          sources={{
            mobile: { src1x: missionMobile1x, src2x: missionMobile2x, src4x: missionMobile4x },
            tablet: { src1x: missionTablet1x, src2x: missionTablet2x, src4x: missionTablet4x },
            desktop: { src1x: missionDesktop1x, src2x: missionDesktop2x, src4x: missionDesktop4x },
          }}
        />
      </div>

      <div className="absolute inset-y-0 right-0 w-full bg-graphite/80 tablet:w-[82.682%] desktop:w-[53.542%]" />

      <div className="relative z-10 ml-auto mt-[20px] flex min-h-[571px] w-[98.667%] flex-col items-end gap-10 px-5 text-right max-[767px]:landscape:min-h-[100dvh] tablet:mr-8 tablet:min-h-[610px] tablet:w-[78.906%] tablet:px-0 desktop:mr-[120px] desktop:min-h-[680px] desktop:w-[45.208%]">
        <h2 className="font-heading text-[32px] uppercase tracking-[0.09em] text-orange tablet:text-5xl desktop:text-6xl">
          {t('mission.heading')}
        </h2>
        <p className="font-body text-[18px] font-normal leading-normal tracking-[0.05em] text-offwhite w-[94.324%] tablet:w-[97.360%] desktop:w-[94.931%]">
          {t('mission.textOne')}
        </p>
        <p className="font-body text-[18px] font-normal leading-normal tracking-[0.05em] text-offwhite w-[94.324%] tablet:w-[97.360%] desktop:w-[94.931%]">
          {t('mission.textTwo')}
        </p>
      </div>
    </section>
  )
}
