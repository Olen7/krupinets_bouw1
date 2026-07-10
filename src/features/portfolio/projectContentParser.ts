import type { KeyFeature } from './portfolio.types'

/** Splits a Strapi long-text field into paragraphs on blank lines. */
export function parseParagraphs(raw: string): string[] {
  return raw
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
}

/** Parses the "key_features" field: bullet blocks like `- **Title:** text`, separated by blank lines. */
export function parseKeyFeatures(raw: string): KeyFeature[] {
  return raw
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const match = /^-\s*\*\*(.+?):?\*\*\s*(.*)$/s.exec(block)
      if (!match) return { title: '', text: block }

      const [, title, text] = match
      return { title: title.trim(), text: text.trim() }
    })
}
