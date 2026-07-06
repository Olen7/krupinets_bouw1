import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { PortfolioGrid } from './PortfolioGrid'
import type { PortfolioListItem } from './portfolio.types'

function makeItems(count: number): PortfolioListItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    type: 'bathrooms',
    imageUrl: `https://example.com/${i + 1}.jpg`,
  }))
}

describe('PortfolioGrid', () => {
  it('renders a message and no toggle when there are no items', () => {
    renderWithProviders(<PortfolioGrid items={[]} />)
    expect(screen.getByText('No projects in this category yet.')).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('renders all items with no toggle when there are 3 or fewer', () => {
    renderWithProviders(<PortfolioGrid items={makeItems(2)} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.queryByRole('button', { name: /see more/i })).not.toBeInTheDocument()
  })

  it('shows only the first 3 items plus a "See more" toggle when there are more than 3', async () => {
    const user = userEvent.setup()
    renderWithProviders(<PortfolioGrid items={makeItems(5)} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    const toggle = screen.getByRole('button', { name: 'See more' })

    await user.click(toggle)

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
    expect(screen.getByRole('button', { name: 'See less' })).toBeInTheDocument()
  })
})
