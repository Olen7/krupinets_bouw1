import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { UiProvider } from '@/context/UiContext'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'

function renderHeaderWithMenu() {
  return renderWithProviders(
    <UiProvider>
      <Header />
      <MobileMenu />
    </UiProvider>,
  )
}

describe('MobileMenu', () => {
  it('is closed by default', () => {
    renderHeaderWithMenu()
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })

  it('opens when the burger button is clicked', async () => {
    const user = userEvent.setup()
    renderHeaderWithMenu()

    await user.click(screen.getByLabelText('Open menu'))

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes when the close button is clicked', async () => {
    const user = userEvent.setup()
    renderHeaderWithMenu()

    await user.click(screen.getByLabelText('Open menu'))
    await user.click(screen.getByLabelText('Close menu'))

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })

  it('closes when a nav link is clicked', async () => {
    const user = userEvent.setup()
    renderHeaderWithMenu()

    await user.click(screen.getByLabelText('Open menu'))
    const links = screen.getAllByText('About Us')
    await user.click(links[links.length - 1])

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })
})
