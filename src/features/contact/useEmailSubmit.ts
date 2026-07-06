import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useEmailSubmit<T>(sendFn: (params: T) => Promise<unknown>) {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (params: T) => {
    setIsSubmitting(true)
    setError(null)
    try {
      await sendFn(params)
      navigate('/feedback-success')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submit, isSubmitting, error }
}
