import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { createReviewFormSchema, type ReviewFormValues } from './reviewForm.schema'
import { useSubmitReviewMutation } from './useSubmitReviewMutation'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'

export function ReviewForm({ onSuccess }: { onSuccess: () => void }) {
  const { t } = useTranslation('reviews')
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(createReviewFormSchema(t)),
    defaultValues: { grade: 5 },
  })

  const mutation = useSubmitReviewMutation()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = handleSubmit(async (values) => {
    await mutation.mutateAsync(values)
    reset({ username: '', text: '', grade: 5 })
    setIsSubmitted(true)
  })

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <p className="font-body text-xl font-semibold text-graphite">{t('form.successTitle')}</p>
        <p className="font-body text-graphite">{t('form.successMessage')}</p>
        <Button type="button" onClick={onSuccess}>
          {t('form.successClose')}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <Controller
        name="grade"
        control={control}
        render={({ field }) => (
          <StarRating name="grade" value={field.value} onChange={field.onChange} />
        )}
      />

      <div>
        <label htmlFor="review-name" className="mb-1 block font-body text-base tracking-[0.06em] text-graphite">
          {t('form.name')}
        </label>
        <input
          id="review-name"
          type="text"
          placeholder={t('form.namePlaceholder')}
          className="w-full border border-placeholder px-3 py-3 font-body text-base tracking-[0.06em] text-placeholder"
          {...register('username')}
        />
        {errors.username && <p className="text-sm text-orange">{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="review-text" className="mb-1 block font-body text-base tracking-[0.06em] text-graphite">
          {t('form.text')}
        </label>
        <textarea
          id="review-text"
          placeholder={t('form.textPlaceholder')}
          className="h-[240px] w-full resize-none border border-placeholder px-3 py-3 font-body text-base tracking-[0.06em] text-placeholder"
          {...register('text')}
        />
        {errors.text && <p className="text-sm text-orange">{errors.text.message}</p>}
      </div>

      {mutation.isError && <p className="text-sm text-orange">{t('form.submitError')}</p>}

      <Button type="submit" disabled={mutation.isPending} className="self-start">
        {t('form.submit')}
      </Button>
    </form>
  )
}
