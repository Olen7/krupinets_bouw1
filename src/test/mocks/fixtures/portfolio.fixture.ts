import type { StrapiCollectionResponse, StrapiSingleResponse } from '@/types/strapi'
import type { PortfolioAttributes } from '@/features/portfolio/portfolio.types'

function project(
  id: number,
  name: string,
  type: PortfolioAttributes['type'],
): { id: number; attributes: PortfolioAttributes } {
  return {
    id,
    attributes: {
      name,
      type,
      description: '**Overview**\nA short project description.\n\n**Materials**\nOak, tile, glass.',
      main_image: {
        data: {
          id: id * 10,
          attributes: {
            url: `https://res.cloudinary.com/demo/image/upload/v1/project-${id}.jpg`,
            formats: {
              large: {
                url: `https://res.cloudinary.com/demo/image/upload/v1/project-${id}-large.jpg`,
              },
            },
          },
        },
      },
      additional_images: {
        data: [
          {
            id: id * 100,
            attributes: { url: `https://res.cloudinary.com/demo/image/upload/v1/project-${id}-extra.jpg` },
          },
        ],
      },
    },
  }
}

export const portfolioListFixture: StrapiCollectionResponse<PortfolioAttributes> = {
  data: [
    project(1, 'Modern Bathroom', 'bathrooms'),
    project(2, 'Cozy Living Room', 'general-renovation'),
    project(3, 'Attic Dormer', 'dormer-constructions'),
  ],
  meta: {},
}

export function portfolioDetailFixture(id: number): StrapiSingleResponse<PortfolioAttributes> {
  return { data: project(id, `Project ${id}`, 'bathrooms'), meta: {} }
}
