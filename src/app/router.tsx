import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { FeedbackSuccessPage } from '@/pages/FeedbackSuccessPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function ComingSoon({ title }: { title: string }) {
  return <p className="px-5 py-20 text-center text-white">{title} — coming in a later phase</p>
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="portfolio" element={<ComingSoon title="Portfolio" />} />
        <Route path="portfolio/:id" element={<ComingSoon title="Project detail" />} />
        <Route path="reviews" element={<ComingSoon title="Reviews" />} />
        <Route path="feedback-success" element={<FeedbackSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
