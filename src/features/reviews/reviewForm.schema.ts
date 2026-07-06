import { z } from 'zod'
import type { TFunction } from 'i18next'

export function createReviewFormSchema(t: TFunction) {
  return z.object({
    username: z.string().trim().min(1, t('form.nameRequired')),
    text: z.string().trim().min(1, t('form.textRequired')),
    grade: z.number().min(1).max(5),
  })
}

export type ReviewFormValues = z.infer<ReturnType<typeof createReviewFormSchema>>
