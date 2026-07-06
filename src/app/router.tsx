import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

function ComingSoon({ title }: { title: string }) {
  return <p className="px-5 py-20 text-center text-white">{title} — coming in a later phase</p>
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ComingSoon title="Home" />} />
      </Route>
    </Routes>
  )
}
