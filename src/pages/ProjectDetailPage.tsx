import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Lightbox } from '@/components/ui/Lightbox'
import { useProjectQuery } from '@/features/portfolio/useProjectQuery'

const backLinkStyles =
  'inline-flex w-fit items-center justify-center border-2 border-orange px-4 py-2 font-body text-sm font-semibold tracking-wide text-orange transition-colors hover:bg-orange hover:text-white tablet:px-5 tablet:py-2.5 tablet:text-base desktop:px-6 desktop:py-3 desktop:text-lg'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { t, i18n } = useTranslation('portfolio')
  const { data, isLoading, isError } = useProjectQuery(id)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (isLoading) {
    return <p className="px-5 py-20 text-center font-body text-white">{t('loadingProject')}</p>
  }

  if (isError || !data) {
    return (
      <div className="flex flex-col items-center gap-6 px-5 py-20 text-center">
        <p className="font-body text-orange">{t('notFound')}</p>
        <Link to="/portfolio" className={backLinkStyles}>
          {t('backToPortfolio')}
        </Link>
      </div>
    )
  }

  // Both locales' text arrive in the same response, so switching language just
  // swaps which translation we render — no refetch or navigation needed.
  const translation = data.translations[i18n.language] ?? data.translations[data.defaultLocale]!

  const galleryImages = [
    { url: data.mainImageUrl, alt: translation.name },
    ...data.additionalImageUrls.map((url, i) => ({
      url,
      alt: `${translation.name} additional view ${i + 1}`,
    })),
  ]

  return (
    <article className="flex flex-col gap-8 px-5 pb-10 pt-0 tablet:px-8 desktop:px-[120px]">
      <Link to="/portfolio" className={backLinkStyles}>
        {t('backToPortfolio')}
      </Link>

      <h1 className="font-heading text-4xl text-orange">{translation.name}</h1>

      <div className="flex flex-wrap gap-x-6 gap-y-1 font-body text-sm text-white/70">
        <span>
          {t('meta.location')}: {translation.location}
        </span>
        <span>
          {t('meta.projectSize')}: {translation.projectSize}
        </span>
      </div>

      <button type="button" onClick={() => setLightboxIndex(0)} className="cursor-zoom-in">
        <img
          src={data.mainImageUrl}
          alt={translation.name}
          className="w-full rounded object-cover desktop:h-[500px]"
        />
      </button>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-heading text-xl text-orange">{t('scopeOfWork')}</h2>
          {translation.scopeOfWork.map((paragraph) => (
            <p key={paragraph} className="mt-2 font-body text-white">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-heading text-xl text-orange">{t('keyFeatures')}</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {translation.keyFeatures.map((feature) => (
              <li key={feature.title || feature.text} className="font-body text-white">
                {feature.title && <span className="font-semibold">{feature.title}: </span>}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {data.additionalImageUrls.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-3">
          {data.additionalImageUrls.map((url, i) => (
            <li key={url}>
              <button type="button" onClick={() => setLightboxIndex(i + 1)} className="block w-full cursor-zoom-in">
                <img
                  src={url}
                  alt={`${translation.name} additional view`}
                  loading="lazy"
                  className="h-40 w-full rounded object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {lightboxIndex !== null && (
        <Lightbox images={galleryImages} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </article>
  )
}
