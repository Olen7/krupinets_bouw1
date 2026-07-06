import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { consultationSchema, type ConsultationFormValues } from './contactForm.schema'
import { sendConsultation } from '@/lib/emailjs'
import { useEmailSubmit } from './useEmailSubmit'
import { Button } from '@/components/ui/Button'

export function ConsultationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormValues>({ resolver: zodResolver(consultationSchema) })

  const { submit, isSubmitting, error } = useEmailSubmit(sendConsultation)

  const onSubmit = handleSubmit(async (values) => {
    await submit(values)
    reset()
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <h2 className="font-heading text-2xl text-white">Consultation</h2>

      <div>
        <label htmlFor="consultation-name" className="block text-sm text-white">
          Name*
        </label>
        <input
          id="consultation-name"
          type="text"
          placeholder="Enter your name"
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('name')}
        />
        {errors.name && <p className="text-sm text-orange">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="consultation-phone" className="block text-sm text-white">
          Phone*
        </label>
        <input
          id="consultation-phone"
          type="tel"
          placeholder="Enter your phone"
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('phone')}
        />
        {errors.phone && <p className="text-sm text-orange">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="consultation-email" className="block text-sm text-white">
          E-mail*
        </label>
        <input
          id="consultation-email"
          type="email"
          placeholder="Enter your mail"
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('email')}
        />
        {errors.email && <p className="text-sm text-orange">{errors.email.message}</p>}
      </div>

      {error && <p className="text-sm text-orange">{error}</p>}

      <Button type="submit" disabled={isSubmitting}>
        Consultation
      </Button>
    </form>
  )
}
