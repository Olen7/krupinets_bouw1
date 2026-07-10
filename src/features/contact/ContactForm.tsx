import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { createContactSchema, type ContactFormValues } from './contactForm.schema'
import { sendContact } from '@/lib/emailjs'
import { useEmailSubmit } from './useEmailSubmit'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const { t } = useTranslation(['contact', 'common'])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(createContactSchema(t)) })

  const { submit, isSubmitting, error } = useEmailSubmit(sendContact)

  const onSubmit = handleSubmit(async (values) => {
    await submit(values)
    reset()
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1 inline-block w-fit rounded-full bg-[rgb(204_204_204_/_65%)] px-3 py-0.5 font-body text-base tracking-[0.06em] text-graphite">
          {t('consultation.name', { ns: 'common' })}
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder={t('consultation.namePlaceholder', { ns: 'common' })}
          className="w-full border border-placeholder/40 bg-white px-3 py-3 text-graphite"
          {...register('name')}
        />
        {errors.name && <p className="text-sm text-orange">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1 inline-block w-fit rounded-full bg-[rgb(204_204_204_/_65%)] px-3 py-0.5 font-body text-base tracking-[0.06em] text-graphite">
          {t('consultation.phone', { ns: 'common' })}
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder={t('consultation.phonePlaceholder', { ns: 'common' })}
          className="w-full border border-placeholder/40 bg-white px-3 py-3 text-graphite"
          {...register('phone')}
        />
        {errors.phone && <p className="text-sm text-orange">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 inline-block w-fit rounded-full bg-[rgb(204_204_204_/_65%)] px-3 py-0.5 font-body text-base tracking-[0.06em] text-graphite">
          {t('consultation.email', { ns: 'common' })}
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder={t('consultation.emailPlaceholder', { ns: 'common' })}
          className="w-full border border-placeholder/40 bg-white px-3 py-3 text-graphite"
          {...register('email')}
        />
        {errors.email && <p className="text-sm text-orange">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-question" className="mb-1 inline-block w-fit rounded-full bg-[rgb(204_204_204_/_65%)] px-3 py-0.5 font-body text-base tracking-[0.06em] text-graphite">
          {t('form.question')}
        </label>
        <textarea
          id="contact-question"
          placeholder={t('form.questionPlaceholder')}
          className="h-[150px] w-full resize-none border border-placeholder/40 bg-white px-3 py-3 text-graphite"
          {...register('question')}
        />
        {errors.question && <p className="text-sm text-orange">{errors.question.message}</p>}
      </div>

      {error && <p className="text-sm text-orange">{t('form.submitError')}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {t('form.submit')}
      </Button>
    </form>
  )
}
