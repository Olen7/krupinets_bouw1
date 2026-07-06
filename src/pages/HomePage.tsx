import { HeroSection } from '@/features/home/HeroSection'
import { AboutTeaser } from '@/features/home/AboutTeaser'
import { ServiceCard } from '@/features/home/ServiceCard'
import { services } from '@/features/home/servicesData'
import { BenefitCard, type BenefitCardProps } from '@/features/home/BenefitCard'
import { HomePortfolioTeaser } from '@/features/home/HomePortfolioTeaser'
import { SectionHeading } from '@/components/ui/SectionHeading'

const benefits: BenefitCardProps[] = [
  { icon: 'checkmark', label: 'performance quality' },
  { icon: 'carbon-tool-box', label: 'experience' },
  { icon: 'ph-star', label: 'innovations' },
  { icon: 'octicon-people', label: 'customer orientation' },
]

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />

      <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:px-[120px]">
        <SectionHeading>Services</SectionHeading>
        <ul className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:px-[120px]">
        <SectionHeading>Benefits</SectionHeading>
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
