import { http, HttpResponse } from 'msw'
import { portfolioListFixture, portfolioDetailFixture } from '../fixtures/portfolio.fixture'

export const portfolioHandlers = [
  http.get('*/portfolios', () => HttpResponse.json(portfolioListFixture)),
  http.get('*/portfolios/:id', ({ params }) => {
    const id = Number(params.id)
    return HttpResponse.json(portfolioDetailFixture(id))
  }),
]
