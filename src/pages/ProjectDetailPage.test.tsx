import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ProjectDetailPage } from './ProjectDetailPage'

function renderProjectDetail(id: number) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/portfolio/${id}`]}>
        <Routes>
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  )
}

describe('ProjectDetailPage', () => {
  it('renders the project name, main image, scope of work, key features, and gallery from the API response', async () => {
    renderProjectDetail(7)

    expect(await screen.findByText('Project 7')).toBeInTheDocument()

    const mainImage = screen.getByAltText('Project 7')
    expect(mainImage).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/demo/image/upload/v1/project-7.jpg',
    )

    expect(screen.getByText('First paragraph of work.')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph of work.')).toBeInTheDocument()
    expect(screen.getByText('A freestanding bath.', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('A walk-in shower.', { exact: false })).toBeInTheDocument()

    expect(screen.getByAltText('Project 7 additional view')).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/demo/image/upload/v1/project-7-extra.jpg',
    )
  })
})
