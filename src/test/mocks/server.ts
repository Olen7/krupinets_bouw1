import { setupServer } from 'msw/node'
import { portfolioHandlers } from './handlers/portfolios.handlers'
import { reviewsHandlers } from './handlers/reviews.handlers'

export const server = setupServer(...portfolioHandlers, ...reviewsHandlers)
