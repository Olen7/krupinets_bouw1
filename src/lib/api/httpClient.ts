import { env } from '@/lib/env'

async function get<T>(path: string): Promise<T> {
  const response = await fetch(`${env.strapiBaseUrl}${path}`, {
    headers: { Authorization: `Bearer ${env.strapiToken}` },
  })

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const httpClient = { get }
