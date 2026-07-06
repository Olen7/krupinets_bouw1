import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useDisclosure } from './useDisclosure'

describe('useDisclosure', () => {
  it('defaults to closed', () => {
    const { result } = renderHook(() => useDisclosure())
    expect(result.current.isOpen).toBe(false)
  })

  it('respects the initial state argument', () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current.isOpen).toBe(true)
  })

  it('open() sets isOpen to true', () => {
    const { result } = renderHook(() => useDisclosure())
    act(() => result.current.open())
    expect(result.current.isOpen).toBe(true)
  })

  it('close() sets isOpen to false', () => {
    const { result } = renderHook(() => useDisclosure(true))
    act(() => result.current.close())
    expect(result.current.isOpen).toBe(false)
  })

  it('toggle() flips the current state', () => {
    const { result } = renderHook(() => useDisclosure())
    act(() => result.current.toggle())
    expect(result.current.isOpen).toBe(true)
    act(() => result.current.toggle())
    expect(result.current.isOpen).toBe(false)
  })
})
