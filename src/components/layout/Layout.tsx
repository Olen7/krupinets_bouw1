import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import { Footer } from './Footer'
import { UiProvider } from '@/context/UiContext'

export function Layout() {
  return (
    <UiProvider>
      <Header />
      <MobileMenu />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </UiProvider>
  )
}
