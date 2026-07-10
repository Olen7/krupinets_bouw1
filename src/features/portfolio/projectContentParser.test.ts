import { describe, expect, it } from 'vitest'
import { parseKeyFeatures, parseParagraphs } from './projectContentParser'

describe('parseParagraphs', () => {
  it('splits text into paragraphs on blank lines', () => {
    const raw = 'First paragraph.\n\nSecond paragraph.'
    expect(parseParagraphs(raw)).toEqual(['First paragraph.', 'Second paragraph.'])
  })

  it('ignores empty blocks caused by trailing blank lines', () => {
    const raw = 'Only paragraph.\n\n\n'
    expect(parseParagraphs(raw)).toEqual(['Only paragraph.'])
  })
})

describe('parseKeyFeatures', () => {
  it('extracts bold titles and their text from bullet blocks', () => {
    const raw =
      '- **Freestanding Bathtub:** An elegant oval bath.\n\n- **Walk-in Shower:** A spacious shower.'

    expect(parseKeyFeatures(raw)).toEqual([
      { title: 'Freestanding Bathtub', text: 'An elegant oval bath.' },
      { title: 'Walk-in Shower', text: 'A spacious shower.' },
    ])
  })

  it('falls back to the raw block as text when no bold title is present', () => {
    const raw = 'Just plain text with no bullet formatting.'
    expect(parseKeyFeatures(raw)).toEqual([{ title: '', text: raw }])
  })
})
