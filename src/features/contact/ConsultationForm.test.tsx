import { describe, expect, it, vi, beforeEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import emailjs from '@emailjs/browser'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { ConsultationForm } from './ConsultationForm'

vi.mock('@emailjs/browser', () => ({
  default: {
    init: vi.fn(),
    send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
  },
}))

describe('ConsultationForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows validation errors when submitted empty', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ConsultationForm />)

    await user.click(screen.getByRole('button', { name: 'Consultation' }))

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('shows an email-format error for an invalid email', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ConsultationForm />)

    await user.type(screen.getByLabelText('Name*'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone*'), '0612345678')
    await user.type(screen.getByLabelText('E-mail*'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Consultation' }))

    expect(await screen.findByText('Enter a valid email')).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('calls emailjs.send with the consultation service/template and resets the form on success', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ConsultationForm />)

    await user.type(screen.getByLabelText('Name*'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone*'), '0612345678')
    await user.type(screen.getByLabelText('E-mail*'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Consultation' }))

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        'service_e883bz7',
        'template_mhvau7b',
        expect.objectContaining({
          name: 'Jane Doe',
          phone: '0612345678',
          email: 'jane@example.com',
        }),
      )
    })

    await waitFor(() => {
      expect(screen.getByLabelText('Name*')).toHaveValue('')
    })
  })
})
