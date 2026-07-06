import { http, HttpResponse } from 'msw'
import { reviewsListFixture, reviewSubmitResponseFixture } from '../fixtures/review.fixture'

export const reviewsHandlers = [
  http.get('*/reviews', () => HttpResponse.json(reviewsListFixture)),
  http.post('*/reviews', async ({ request }) => {
    const body = (await request.json()) as {
      data: { username: string; text: string; grade: number }
    }
    return HttpResponse.json(reviewSubmitResponseFixture(body.data))
  }),
]
