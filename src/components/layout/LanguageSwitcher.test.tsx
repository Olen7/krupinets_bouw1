import { afterEach, describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import i18n from '@/i18n'
import { renderWithProviders } from '@/test/utils/renderWithProviders'
import { UiProvider } from '@/context/UiContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Header } from './Header'

function renderHeader() {
  return renderWithProviders(
    <UiProvider>
      <Header />
    </UiProvider>,
  )
}

describe('LanguageSwitcher', () => {
  afterEach(async () => {
    await i18n.changeLanguage('en')
  })

  it('renders en and nl buttons', () => {
    renderWithProviders(<LanguageSwitcher />)
    expect(screen.getByRole('button', { name: 'en' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'nl' })).toBeInTheDocument()
  })

  it('marks the active language with aria-pressed', () => {
    renderWithProviders(<LanguageSwitcher />)
    expect(screen.getByRole('button', { name: 'en' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'nl' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('clicking nl switches the header nav text to Dutch', async () => {
    const user = userEvent.setup()
    renderHeader()

    expect(screen.getByText('About Us')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'nl' }))

    expect(await screen.findByText('Over ons')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'nl' })).toHaveAttribute('aria-pressed', 'true')
  })
})
