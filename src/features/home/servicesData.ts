import type { ServiceCardProps } from './ServiceCard'

import s1Mobile1x from '@/assets/services/service-1-mobile-1x.jpg'
import s1Mobile2x from '@/assets/services/service-1-mobile-2x.jpg'
import s1Mobile4x from '@/assets/services/service-1-mobile-4x.jpg'
import s1Tablet1x from '@/assets/services/service-1-tablet-1x.jpg'
import s1Tablet2x from '@/assets/services/service-1-tablet-2x.jpg'
import s1Tablet4x from '@/assets/services/service-1-tablet-4x.jpg'
import s1Desktop1x from '@/assets/services/service-1-desktop-1x.jpg'
import s1Desktop2x from '@/assets/services/service-1-desktop-2x.jpg'
import s1Desktop4x from '@/assets/services/service-1-desktop-4x.jpg'

import s2Mobile1x from '@/assets/services/service-2-mobile-1x.jpg'
import s2Mobile2x from '@/assets/services/service-2-mobile-2x.jpg'
import s2Mobile4x from '@/assets/services/service-2-mobile-4x.jpg'
import s2Tablet1x from '@/assets/services/service-2-tablet-1x.jpg'
import s2Tablet2x from '@/assets/services/service-2-tablet-2x.jpg'
import s2Tablet4x from '@/assets/services/service-2-tablet-4x.jpg'
import s2Desktop1x from '@/assets/services/service-2-desktop-1x.jpg'
import s2Desktop2x from '@/assets/services/service-2-desktop-2x.jpg'
import s2Desktop4x from '@/assets/services/service-2-desktop-4x.jpg'

import s3Mobile1x from '@/assets/services/service-3-mobile-1x.jpg'
import s3Mobile2x from '@/assets/services/service-3-mobile-2x.jpg'
import s3Mobile4x from '@/assets/services/service-3-mobile-4x.jpg'
import s3Tablet1x from '@/assets/services/service-3-tablet-1x.jpg'
import s3Tablet2x from '@/assets/services/service-3-tablet-2x.jpg'
import s3Tablet4x from '@/assets/services/service-3-tablet-4x.jpg'
import s3Desktop1x from '@/assets/services/service-3-desktop-1x.jpg'
import s3Desktop2x from '@/assets/services/service-3-desktop-2x.jpg'
import s3Desktop4x from '@/assets/services/service-3-desktop-4x.jpg'

import s4Mobile1x from '@/assets/services/service-4-mobile-1x.jpg'
import s4Mobile2x from '@/assets/services/service-4-mobile-2x.jpg'
import s4Mobile4x from '@/assets/services/service-4-mobile-4x.jpg'
import s4Tablet1x from '@/assets/services/service-4-tablet-1x.jpg'
import s4Tablet2x from '@/assets/services/service-4-tablet-2x.jpg'
import s4Tablet4x from '@/assets/services/service-4-tablet-4x.jpg'
import s4Desktop1x from '@/assets/services/service-4-desktop-1x.jpg'
import s4Desktop2x from '@/assets/services/service-4-desktop-2x.jpg'
import s4Desktop4x from '@/assets/services/service-4-desktop-4x.jpg'

export const services: ServiceCardProps[] = [
  {
    title: 'Bathroom Renovation',
    bullets: [
      '- Removal of old plumbing fixtures and tiles.',
      '- Installation of new plumbing fixtures.',
      '- Tile laying for floors and walls.',
      '- Electrical work including installation of light fixtures and outlets.',
      '- Installation of heating and ventilation systems.',
    ],
    sources: {
      mobile: { src1x: s1Mobile1x, src2x: s1Mobile2x, src4x: s1Mobile4x },
      tablet: { src1x: s1Tablet1x, src2x: s1Tablet2x, src4x: s1Tablet4x },
      desktop: { src1x: s1Desktop1x, src2x: s1Desktop2x, src4x: s1Desktop4x },
    },
  },
  {
    title: 'General Renovation',
    bullets: [
      '- Complete interior updates: living rooms, kitchens, hallways.',
      '- Flooring renovations including parquet, laminate, tile, and PVC installation.',
      '- Replacement of windows and doors.',
      '- Insulation of walls and floors.',
      '- Interior finishing works.',
    ],
    sources: {
      mobile: { src1x: s2Mobile1x, src2x: s2Mobile2x, src4x: s2Mobile4x },
      tablet: { src1x: s2Tablet1x, src2x: s2Tablet2x, src4x: s2Tablet4x },
      desktop: { src1x: s2Desktop1x, src2x: s2Desktop2x, src4x: s2Desktop4x },
    },
  },
  {
    title: 'Dormer Constructions',
    bullets: [
      '- Inspection and repair of rafters and battens.',
      '- Replacement or restoration of roofing materials.',
      '- Insulation of roof and attic.',
      '- Installation of attic window systems.',
      '- Rainwater drainage and gutter installation.',
    ],
    sources: {
      mobile: { src1x: s3Mobile1x, src2x: s3Mobile2x, src4x: s3Mobile4x },
      tablet: { src1x: s3Tablet1x, src2x: s3Tablet2x, src4x: s3Tablet4x },
      desktop: { src1x: s3Desktop1x, src2x: s3Desktop2x, src4x: s3Desktop4x },
    },
  },
  {
    title: 'Painting and Plastering',
    bullets: [
      '- Surface preparation: filling, priming.',
      '- Interior and exterior painting.',
      '- Decorative plastering: textured, Venetian.',
      '- Antifungal and moisture-resistant treatments.',
      '- Restoration work on building facades.',
    ],
    sources: {
      mobile: { src1x: s4Mobile1x, src2x: s4Mobile2x, src4x: s4Mobile4x },
      tablet: { src1x: s4Tablet1x, src2x: s4Tablet2x, src4x: s4Tablet4x },
      desktop: { src1x: s4Desktop1x, src2x: s4Desktop2x, src4x: s4Desktop4x },
    },
  },
]
