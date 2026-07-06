import { createContext, type ReactNode } from 'react'
import { useDisclosure } from '@/hooks/useDisclosure'

export interface UiContextValue {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
}

export const UiContext = createContext<UiContextValue | null>(null)

export function UiProvider({ children }: { children: ReactNode }) {
  const menu = useDisclosure(false)

  const value: UiContextValue = {
    isMenuOpen: menu.isOpen,
    openMenu: menu.open,
    closeMenu: menu.close,
    toggleMenu: menu.toggle,
  }

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}
