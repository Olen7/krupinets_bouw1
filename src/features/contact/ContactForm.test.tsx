import { describe, expect, it, vi, beforeEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import emailjs from '@emailjs/browser'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { env } from '@/lib/env'
import { ContactForm } from './ContactForm'

vi.mock('@emailjs/browser', () => ({
  default: {
    init: vi.fn(),
    send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
  },
}))

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows validation errors when submitted empty, including the question field', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Question is required')).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('calls emailjs.send with the contact service/template and resets the form on success', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ContactForm />)

    await user.type(screen.getByLabelText('Name*'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone*'), '0612345678')
    await user.type(screen.getByLabelText('E-mail*'), 'jane@example.com')
    await user.type(screen.getByLabelText('Your question*'), 'Do you work weekends?')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        env.emailjsServiceId,
        env.emailjsContactTemplateId,
        expect.objectContaining({
          name: 'Jane Doe',
          phone: '0612345678',
          email: 'jane@example.com',
          question: 'Do you work weekends?',
        }),
      )
    })

    await waitFor(() => {
      expect(screen.getByLabelText('Name*')).toHaveValue('')
    })
  })
})
