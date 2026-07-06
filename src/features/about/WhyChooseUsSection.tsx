import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { SectionHeading } from '@/components/ui/SectionHeading'
import whyMobile1x from '@/assets/about/whychoose-mobile-1x.jpg'
import whyMobile2x from '@/assets/about/whychoose-mobile-2x.jpg'
import whyMobile4x from '@/assets/about/whychoose-mobile-4x.jpg'
import whyTablet1x from '@/assets/about/whychoose-tablet-1x.jpg'
import whyTablet2x from '@/assets/about/whychoose-tablet-2x.jpg'
import whyTablet4x from '@/assets/about/whychoose-tablet-4x.jpg'
import whyDesktop1x from '@/assets/about/whychoose-desktop-1x.jpg'
import whyDesktop2x from '@/assets/about/whychoose-desktop-2x.jpg'
import whyDesktop4x from '@/assets/about/whychoose-desktop-4x.jpg'

const reasons = [
  {
    title: 'Expertise',
    text: 'Our experienced professionals bring years of knowledge and skill to every project, guaranteeing you expert solutions that stand the test of time, ensuring your peace of mind.',
  },
  {
    title: 'Quality',
    text: 'We prioritize quality in every aspect of our work. From materials selection to craftsmanship, we uphold the highest standards to ensure the longevity and functionality of our projects.',
  },
  {
    title: 'Innovation',
    text: 'We stay at the forefront of industry trends and technologies to bring you innovative solutions that meet the evolving needs of our clients',
  },
  {
    title: 'Client-Centric Approach',
    text: "Your satisfaction is our top priority. We work closely with you to understand your vision and goals, and we communicate transparently throughout the project's lifecycle.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10 tablet:px-8 desktop:flex-row desktop:items-center desktop:px-[120px]">
      <ResponsiveImage
        alt="Why choose Krupinec Bouw"
        className="w-full rounded object-cover desktop:w-1/2"
        sources={{
          mobile: { src1x: whyMobile1x, src2x: whyMobile2x, src4x: whyMobile4x },
          tablet: { src1x: whyTablet1x, src2x: whyTablet2x, src4x: whyTablet4x },
          desktop: { src1x: whyDesktop1x, src2x: whyDesktop2x, src4x: whyDesktop4x },
        }}
      />
      <div className="flex flex-col gap-4 desktop:w-1/2">
        <SectionHeading>Why Choose Us</SectionHeading>
        <ul className="flex flex-col gap-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="font-body text-white">
              <span className="font-semibold">{reason.title}:</span> {reason.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
