export interface DescriptionSection {
  title: string
  paragraphs: string[]
}

/** Parses the Strapi "description" field: blocks separated by blank lines, each starting with a `**Title**` line. */
export function parseProjectDescription(raw: string): DescriptionSection[] {
  return raw
    .split('\n\n')
    .filter((block) => block.trim().length > 0)
    .map((block) => {
      const [title, ...content] = block.split('\n')
      const titleCleaned =
        title.startsWith('**') && title.endsWith('**') ? title.slice(2, -2).trim() : title.trim()

      return {
        title: titleCleaned,
        paragraphs: content.map((line) => line.trim()).filter(Boolean),
      }
    })
}
