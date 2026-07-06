import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { FeedbackSuccessPage } from './FeedbackSuccessPage'

describe('FeedbackSuccessPage', () => {
  it('renders the confirmation message and a link back to the home page', () => {
    renderWithProviders(<FeedbackSuccessPage />)

    expect(screen.getByText('Your feedback form has been sent!')).toBeInTheDocument()
    expect(screen.getByText('Wait until an employee contacts you!')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Back to the Website' })
    expect(link).toHaveAttribute('href', '/')
  })
})
