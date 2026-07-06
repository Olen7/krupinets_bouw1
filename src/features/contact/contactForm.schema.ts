import { z } from 'zod'

export const consultationSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  phone: z.string().trim().min(1, 'Phone is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
})

export type ConsultationFormValues = z.infer<typeof consultationSchema>

export const contactSchema = consultationSchema.extend({
  question: z.string().trim().min(1, 'Question is required'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
