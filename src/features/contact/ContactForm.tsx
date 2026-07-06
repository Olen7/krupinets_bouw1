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
        <label htmlFor="contact-name" className="block text-sm text-graphite">
          {t('consultation.name', { ns: 'common' })}
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder={t('consultation.namePlaceholder', { ns: 'common' })}
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('name')}
        />
        {errors.name && <p className="text-sm text-orange">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm text-graphite">
          {t('consultation.phone', { ns: 'common' })}
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder={t('consultation.phonePlaceholder', { ns: 'common' })}
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('phone')}
        />
        {errors.phone && <p className="text-sm text-orange">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-graphite">
          {t('consultation.email', { ns: 'common' })}
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder={t('consultation.emailPlaceholder', { ns: 'common' })}
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('email')}
        />
        {errors.email && <p className="text-sm text-orange">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-question" className="block text-sm text-graphite">
          {t('form.question')}
        </label>
        <textarea
          id="contact-question"
          placeholder={t('form.questionPlaceholder')}
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
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
