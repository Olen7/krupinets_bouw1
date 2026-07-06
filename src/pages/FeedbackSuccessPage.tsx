import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'

export function FeedbackSuccessPage() {
  const { t } = useTranslation('common')

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <div className="flex flex-col items-center gap-4 rounded bg-offwhite p-10">
        <h1 className="font-body text-2xl font-semibold text-graphite">
          {t('feedbackSuccess.title')}
        </h1>
        <p className="font-body text-graphite">{t('feedbackSuccess.message')}</p>
        <Link to="/">
          <Button>{t('feedbackSuccess.backButton')}</Button>
        </Link>
      </div>
    </section>
  )
}
