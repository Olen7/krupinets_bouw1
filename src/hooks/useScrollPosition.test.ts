import { afterEach, describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useScrollPosition } from './useScrollPosition'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

describe('useScrollPosition', () => {
  afterEach(() => {
    setScrollY(0)
  })

  it('returns false when the page has not scrolled past the threshold', () => {
    setScrollY(0)
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current).toBe(false)
  })

  it('returns true after scrolling past the threshold', () => {
    const { result } = renderHook(() => useScrollPosition(0))
    act(() => {
      setScrollY(100)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)
  })

  it('returns false again after scrolling back up', () => {
    const { result } = renderHook(() => useScrollPosition(0))
    act(() => {
      setScrollY(100)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)

    act(() => {
      setScrollY(0)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(false)
  })
})
