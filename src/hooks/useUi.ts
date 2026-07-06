import { useContext } from 'react'
import { UiContext } from '@/context/UiContext'

export function useUi() {
  const context = useContext(UiContext)
  if (!context) {
    throw new Error('useUi must be used within a UiProvider')
  }
  return context
}
