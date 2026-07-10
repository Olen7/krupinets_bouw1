import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { fetchPortfolios } from './portfolio.api'
import type { PortfolioCategory } from './portfolio.types'

export function useProjectsQuery(locale: string) {
  return useQuery({
    queryKey: ['portfolios', locale],
    queryFn: () => fetchPortfolios(locale),
    staleTime: 5 * 60_000,
    placeholderData: keepPreviousData,
  })
}

export function useProjectsByCategory(locale: string, category: PortfolioCategory) {
  return useQuery({
    queryKey: ['portfolios', locale],
    queryFn: () => fetchPortfolios(locale),
    staleTime: 5 * 60_000,
    placeholderData: keepPreviousData,
    select: (items) => items.filter((item) => item.type === category),
  })
}
