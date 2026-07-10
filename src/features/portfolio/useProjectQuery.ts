import { useQuery } from '@tanstack/react-query'
import { fetchPortfolio } from './portfolio.api'

export function useProjectQuery(id: string | undefined) {
  return useQuery({
    queryKey: ['portfolio', id],
    queryFn: () => fetchPortfolio(id as string),
    enabled: Boolean(id),
  })
}
