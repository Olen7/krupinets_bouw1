import { useQuery } from '@tanstack/react-query'
import { fetchPortfolio } from './portfolio.api'

export function useProjectQuery(id: string | undefined, locale: string) {
  return useQuery({
    queryKey: ['portfolio', id, locale],
    queryFn: () => fetchPortfolio(id as string, locale),
    enabled: Boolean(id),
  })
}
