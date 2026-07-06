import { useTranslation } from 'react-i18next'
import { HeroSection } from '@/features/home/HeroSection'
import { AboutTeaser } from '@/features/home/AboutTeaser'
import { ServiceCard } from '@/features/home/ServiceCard'
import { useServicesData } from '@/features/home/servicesData'
import { BenefitCard, type BenefitCardProps } from '@/features/home/BenefitCard'
import { HomePortfolioTeaser } from '@/features/home/HomePortfolioTeaser'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HomePage() {
  const { t } = useTranslation('home')
  const services = useServicesData()

  const benefits: BenefitCardProps[] = [
    { icon: 'checkmark', label: t('benefits.performance') },
    { icon: 'carbon-tool-box', label: t('benefits.experience') },
    { icon: 'ph-star', label: t('benefits.innovations') },
    { icon: 'octicon-people', label: t('benefits.customer') },
  ]

  return (
    <>
      <HeroSection />
      <AboutTeaser />

      <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:px-[120px]">
        <SectionHeading>{t('services.heading')}</SectionHeading>
        <ul className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:px-[120px]">
        <SectionHeading>{t('benefits.heading')}</SectionHeading>
        <ul className="grid grid-cols-2 gap-4 desktop:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.icon} {...benefit} />
          ))}
        </ul>
      </section>

      <HomePortfolioTeaser />
    </>
  )
}
