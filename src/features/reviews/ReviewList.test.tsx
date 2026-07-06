import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { ReviewList } from './ReviewList'

describe('ReviewList', () => {
  it('shows 2 reviews initially, then all after "Show more", then collapses again', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ReviewList />)

    expect(await screen.findAllByText('Great work, highly recommended!')).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'Show more' }))
    expect(await screen.findAllByText('Great work, highly recommended!')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Show less' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Show less' }))
    expect(await screen.findAllByText('Great work, highly recommended!')).toHaveLength(2)
  })
})
