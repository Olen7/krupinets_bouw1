import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reviewFormSchema, type ReviewFormValues } from './reviewForm.schema'
import { useSubmitReviewMutation } from './useSubmitReviewMutation'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'

export function ReviewForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
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
          Name*
        </label>
        <input
          id="review-name"
          type="text"
          placeholder="Enter your name"
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('username')}
        />
        {errors.username && <p className="text-sm text-orange">{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="review-text" className="block text-sm text-white">
          Your review*
        </label>
        <textarea
          id="review-text"
          placeholder="Share your experience"
          className="w-full rounded border border-placeholder bg-transparent px-3 py-2 text-white"
          {...register('text')}
        />
        {errors.text && <p className="text-sm text-orange">{errors.text.message}</p>}
      </div>

      {mutation.isError && (
        <p className="text-sm text-orange">Something went wrong. Please try again.</p>
      )}

      <Button type="submit" disabled={mutation.isPending}>
        Submit review
      </Button>
    </form>
  )
}
