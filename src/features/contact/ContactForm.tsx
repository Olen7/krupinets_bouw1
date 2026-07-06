import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormValues } from './contactForm.schema'
import { sendContact } from '@/lib/emailjs'
import { useEmailSubmit } from './useEmailSubmit'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  const { submit, isSubmitting, error } = useEmailSubmit(sendContact)

  const onSubmit = handleSubmit(async (values) => {
    await submit(values)
    reset()
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm text-graphite">
          Name*
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Enter your name"
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('name')}
        />
        {errors.name && <p className="text-sm text-orange">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm text-graphite">
          Phone*
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="Enter your phone"
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('phone')}
        />
        {errors.phone && <p className="text-sm text-orange">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-graphite">
          E-mail*
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="Enter your mail"
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('email')}
        />
        {errors.email && <p className="text-sm text-orange">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-question" className="block text-sm text-graphite">
          Your question*
        </label>
        <textarea
          id="contact-question"
          placeholder="Enter your question"
          className="w-full rounded border border-placeholder bg-white px-3 py-2 text-graphite"
          {...register('question')}
        />
        {errors.question && <p className="text-sm text-orange">{errors.question.message}</p>}
      </div>

      {error && <p className="text-sm text-orange">{error}</p>}

      <Button type="submit" disabled={isSubmitting}>
        Send
      </Button>
    </form>
  )
}
