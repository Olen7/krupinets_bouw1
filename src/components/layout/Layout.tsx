import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { UiProvider } from '@/context/UiContext'

export function Layout() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  return (
    <UiProvider>
      <ScrollToTop />
      <Header />
      <MobileMenu />
      <div className="flex min-h-screen flex-col">
        <main className={`flex-1 ${isHomePage ? '' : 'pt-14 tablet:pt-[72px] desktop:pt-[98px]'}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </UiProvider>
  )
}
