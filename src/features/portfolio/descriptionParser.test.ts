import { describe, expect, it } from 'vitest'
import { parseProjectDescription } from './descriptionParser'

describe('parseProjectDescription', () => {
  it('splits blocks on blank lines and strips ** from titles', () => {
    const raw = '**Overview**\nFirst line.\nSecond line.\n\n**Materials**\nOnly line.'

    expect(parseProjectDescription(raw)).toEqual([
      { title: 'Overview', paragraphs: ['First line.', 'Second line.'] },
      { title: 'Materials', paragraphs: ['Only line.'] },
    ])
  })

  it('keeps a plain (non-bold) title as-is', () => {
    const raw = 'Plain Title\nSome text.'
    expect(parseProjectDescription(raw)).toEqual([
      { title: 'Plain Title', paragraphs: ['Some text.'] },
    ])
  })

  it('handles a title with no paragraph lines', () => {
    const raw = '**Just a title**'
    expect(parseProjectDescription(raw)).toEqual([{ title: 'Just a title', paragraphs: [] }])
  })

  it('ignores empty blocks caused by trailing blank lines', () => {
    const raw = '**Overview**\nText.\n\n\n'
    expect(parseProjectDescription(raw)).toEqual([{ title: 'Overview', paragraphs: ['Text.'] }])
  })
})
