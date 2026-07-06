import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { NotFoundPage } from './NotFoundPage'

describe('NotFoundPage', () => {
  it('renders the 404 heading, message, and a link back to the home page', () => {
    renderWithProviders(<NotFoundPage />)

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText("WE CAN'T FIND THIS PAGE")).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Main page' })
    expect(link).toHaveAttribute('href', '/')
  })
})
