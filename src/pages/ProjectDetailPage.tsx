import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProjectQuery } from '@/features/portfolio/useProjectQuery'
import { parseProjectDescription } from '@/features/portfolio/descriptionParser'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { t, i18n } = useTranslation('portfolio')
  const { data, isLoading, isError } = useProjectQuery(id, i18n.language)

  if (isLoading) {
    return <p className="px-5 py-20 text-center font-body text-white">{t('loadingProject')}</p>
  }

  if (isError || !data) {
    return <p className="px-5 py-20 text-center font-body text-orange">{t('notFound')}</p>
  }

  const sections = parseProjectDescription(data.description)

  return (
    <article className="flex flex-col gap-8 px-5 py-10 tablet:px-8 desktop:px-[120px]">
      <h1 className="font-heading text-4xl text-orange">{data.name}</h1>

      <img
        src={data.mainImageUrl}
        alt={data.name}
        className="w-full rounded object-cover desktop:h-[500px]"
      />

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading text-xl text-orange">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-2 font-body text-white">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {data.additionalImageUrls.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-3">
          {data.additionalImageUrls.map((url) => (
            <li key={url}>
              <img
                src={url}
                alt={`${data.name} additional view`}
                loading="lazy"
                className="h-40 w-full rounded object-cover"
              />
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
