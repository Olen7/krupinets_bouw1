import { useTranslation } from 'react-i18next'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { SectionHeading } from '@/components/ui/SectionHeading'
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
    <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:flex-row-reverse desktop:items-center desktop:px-[120px]">
      <ResponsiveImage
        alt="Our mission"
        className="w-full rounded object-cover desktop:w-1/2"
        sources={{
          mobile: { src1x: missionMobile1x, src2x: missionMobile2x, src4x: missionMobile4x },
          tablet: { src1x: missionTablet1x, src2x: missionTablet2x, src4x: missionTablet4x },
          desktop: { src1x: missionDesktop1x, src2x: missionDesktop2x, src4x: missionDesktop4x },
        }}
      />
      <div className="flex flex-col gap-4 desktop:w-1/2">
        <SectionHeading>{t('mission.heading')}</SectionHeading>
        <p className="font-body text-white">{t('mission.textOne')}</p>
        <p className="font-body text-white">{t('mission.textTwo')}</p>
      </div>
    </section>
  )
}
