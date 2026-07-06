import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders nothing when closed', () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        <p>Content</p>
      </Modal>,
    )
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('renders children when open', () => {
    render(
      <Modal isOpen onClose={vi.fn()}>
        <p>Content</p>
      </Modal>,
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('calls onClose when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal isOpen onClose={onClose}>
        <p>Content</p>
      </Modal>,
    )

    await user.click(screen.getByRole('dialog').parentElement as HTMLElement)
    expect(onClose).toHaveBeenCalled()
  })

  it('does not call onClose when clicking inside the dialog panel', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal isOpen onClose={onClose}>
        <p>Content</p>
      </Modal>,
    )

    await user.click(screen.getByText('Content'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal isOpen onClose={onClose}>
        <p>Content</p>
      </Modal>,
    )

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalled()
  })
})
