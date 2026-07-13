import { describe, expect, it, vi } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { ReviewForm } from './ReviewForm'

describe('ReviewForm', () => {
  it('defaults to a 5-star rating', () => {
    renderWithProviders(<ReviewForm onSuccess={vi.fn()} />)
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    expect(radios).toHaveLength(5)
    expect(radios.find((r) => r.value === '5')).toBeChecked()
  })

  it('requires name and review text before submitting', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ReviewForm onSuccess={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Review text is required')).toBeInTheDocument()
  })

  it('shows a success message after submitting, then calls onSuccess when closed', async () => {
    const user = userEvent.setup()
    const onSuccess = vi.fn()
    renderWithProviders(<ReviewForm onSuccess={onSuccess} />)

    await user.type(screen.getByLabelText('Name*'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your review*'), 'Excellent craftsmanship.')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(await screen.findByText('Thank you!')).toBeInTheDocument()
    expect(onSuccess).not.toHaveBeenCalled()

    await user.click(screen.getByRole('button', { name: 'Close' }))
    await waitFor(() => expect(onSuccess).toHaveBeenCalled())
  })
})
