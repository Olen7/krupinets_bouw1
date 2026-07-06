import { z } from 'zod'
import type { TFunction } from 'i18next'

export function createConsultationSchema(t: TFunction) {
  return z.object({
    name: z.string().trim().min(1, t('consultation.nameRequired', { ns: 'common' })),
    phone: z.string().trim().min(1, t('consultation.phoneRequired', { ns: 'common' })),
    email: z
      .string()
      .trim()
      .min(1, t('consultation.emailRequired', { ns: 'common' }))
      .email(t('consultation.emailInvalid', { ns: 'common' })),
  })
}

export type ConsultationFormValues = z.infer<ReturnType<typeof createConsultationSchema>>

export function createContactSchema(t: TFunction) {
  return createConsultationSchema(t).extend({
    question: z.string().trim().min(1, t('form.questionRequired', { ns: 'contact' })),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>
