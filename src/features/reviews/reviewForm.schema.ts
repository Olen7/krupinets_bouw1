import { z } from 'zod'

export const reviewFormSchema = z.object({
  username: z.string().trim().min(1, 'Name is required'),
  text: z.string().trim().min(1, 'Review text is required'),
  grade: z.number().min(1).max(5),
})

export type ReviewFormValues = z.infer<typeof reviewFormSchema>
