import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function FeedbackSuccessPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <div className="flex flex-col items-center gap-4 rounded bg-offwhite p-10">
        <h1 className="font-body text-2xl font-semibold text-graphite">
          Your feedback form has been sent!
        </h1>
        <p className="font-body text-graphite">Wait until an employee contacts you!</p>
        <Link to="/">
          <Button>Back to the Website</Button>
        </Link>
      </div>
    </section>
  )
}
