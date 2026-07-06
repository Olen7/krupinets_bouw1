import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { ResponsiveBackground } from '@/components/ui/ResponsiveBackground'
import errorMobile1x from '@/assets/error/error-mobile-1x.jpg'
import errorMobile2x from '@/assets/error/error-mobile-2x.jpg'
import errorTablet1x from '@/assets/error/error-tablet-1x.jpg'
import errorTablet2x from '@/assets/error/error-tablet-2x.jpg'
import errorDesktop1x from '@/assets/error/error-desktop-1x.jpg'
import errorDesktop2x from '@/assets/error/error-desktop-2x.jpg'

export function NotFoundPage() {
  const { t } = useTranslation('common')

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <ResponsiveBackground
        sources={{
          mobile: { src1x: errorMobile1x, src2x: errorMobile2x },
          tablet: { src1x: errorTablet1x, src2x: errorTablet2x },
          desktop: { src1x: errorDesktop1x, src2x: errorDesktop2x },
        }}
        className="bg-cover bg-center"
      />
      <h1 className="font-heading text-7xl text-orange">{t('notFound.title')}</h1>
      <p className="font-heading text-xl text-white">{t('notFound.message')}</p>
      <p className="max-w-md font-body text-white">{t('notFound.urlHint')}</p>
      <Link to="/">
        <Button>{t('notFound.mainPageButton')}</Button>
      </Link>
    </section>
  )
}
