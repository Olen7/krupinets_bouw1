import { env } from '@/lib/env'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${env.strapiBaseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.strapiToken}`,
      ...init?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}

async function get<T>(path: string): Promise<T> {
  return request<T>(path)
}

async function post<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(body),
  })
}

export const httpClient = { get, post }
