import type { Client, ClientUpdate } from '@types'

import { mockClient } from '../mocks/data/client'

const DEFAULT_CLIENT_ID = '123456'

export class ClientService {
  private fallbackClient: Client = structuredClone(mockClient)

  // Appel REST : récupération des informations du client
  public async getClient(clientId: string = DEFAULT_CLIENT_ID): Promise<Client> {
    try {
      const response = await fetch(`/api/clients/${clientId}`)
      if (!response.ok) {
        throw new Error(`Erreur API (${response.status})`)
      }
      return response.json()
    } catch {
      if (clientId === this.fallbackClient.id) {
        return this.fallbackClient
      }
      throw new Error('Client introuvable')
    }
  }

  // Appel REST : mise à jour des informations du client
  public async updateClient(clientId: string, payload: Partial<ClientUpdate>): Promise<Client> {
    try {
      const response = await fetch(`/api/clients/${clientId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error(`Erreur API (${response.status})`)
      }
      return response.json()
    } catch {
      if (clientId !== this.fallbackClient.id) {
        throw new Error('Client introuvable')
      }

      this.fallbackClient = {
        ...this.fallbackClient,
        ...payload,
        preferences: payload.preferences
          ? {
              ...this.fallbackClient.preferences,
              ...payload.preferences,
            }
          : this.fallbackClient.preferences,
      }

      return this.fallbackClient
    }
  }
}
