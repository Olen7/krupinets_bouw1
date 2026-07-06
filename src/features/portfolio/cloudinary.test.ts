import { describe, expect, it } from 'vitest'
import { transformCloudinaryUrl } from './cloudinary'

describe('transformCloudinaryUrl', () => {
  it('inserts the resize/quality transform after /upload/', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/v1234/photo.jpg'
    expect(transformCloudinaryUrl(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/w_1920,h_1080,c_limit,q_auto,f_auto/v1234/photo.jpg',
    )
  })

  it('only replaces the first occurrence of /upload/', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/upload/photo.jpg'
    expect(transformCloudinaryUrl(url)).toBe(
      'https://res.cloudinary.com/demo/image/upload/w_1920,h_1080,c_limit,q_auto,f_auto/upload/photo.jpg',
    )
  })

  it('returns the url unchanged if it has no /upload/ segment', () => {
    const url = 'https://example.com/photo.jpg'
    expect(transformCloudinaryUrl(url)).toBe(url)
  })
})
