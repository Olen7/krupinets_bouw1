import '@testing-library/jest-dom/vitest'
import i18n from '@/i18n'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './mocks/server'

beforeAll(async () => {
  await i18n.changeLanguage('en')
  server.listen({ onUnhandledRequest: 'error' })
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
