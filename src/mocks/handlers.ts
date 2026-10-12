import type { Client } from '@types'

import { HttpResponse, http } from 'msw'

import { mockClient } from './data/client'

// Données client renvoyées par le mock REST.
// Elles respectent le schéma décrit dans public/swagger.yaml.
const client: Client = mockClient

export const handlers = [
  // GET /api/clients/:clientId
  http.get('/api/clients/:clientId', ({ params }) => {
    if (params.clientId !== client.id) {
      return new HttpResponse(null, { status: 404 })
    }
    return HttpResponse.json(client)
  }),

  // PUT /api/clients/:clientId
  http.put('/api/clients/:clientId', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>
    return HttpResponse.json({ ...client, ...body })
  }),
]
