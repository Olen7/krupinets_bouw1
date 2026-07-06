import { setupServer } from 'msw/node'
import { portfolioHandlers } from './handlers/portfolios.handlers'

export const server = setupServer(...portfolioHandlers)
