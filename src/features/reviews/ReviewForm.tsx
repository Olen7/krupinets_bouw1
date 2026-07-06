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

  const onSubmit = handleSubmit(async (values) => {
    await mutation.mutateAsync(values)
    reset({ username: '', text: '', grade: 5 })
    onSuccess()
  })

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
        <label htmlFor="review-name" className="block text-sm text-white">
          {t('form.name')}
        </label>
        <input
          id="review-name"
          type="text"
          placeholder={t('form.namePlaceholder')}
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('username')}
        />
        {errors.username && <p className="text-sm text-orange">{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="review-text" className="block text-sm text-white">
          {t('form.text')}
        </label>
        <textarea
          id="review-text"
          placeholder={t('form.textPlaceholder')}
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('text')}
        />
        {errors.text && <p className="text-sm text-orange">{errors.text.message}</p>}
      </div>

      {mutation.isError && <p className="text-sm text-orange">{t('form.submitError')}</p>}

      <Button type="submit" disabled={mutation.isPending}>
        {t('form.submit')}
      </Button>
    </form>
  )
}
