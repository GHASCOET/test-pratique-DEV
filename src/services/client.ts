import type { Client, ClientUpdate } from '@types'

const DEFAULT_CLIENT_ID = '123456'

export class ClientService {
  // Appel REST : récupération des informations du client
  public async getClient(clientId: string = DEFAULT_CLIENT_ID): Promise<Client> {
    const response = await fetch(`/api/clients/${clientId}`)
    if (!response.ok) {
      throw new Error(`Erreur API (${response.status})`)
    }
    return response.json()
  }

  // Appel REST : mise à jour des informations du client
  public async updateClient(clientId: string, payload: Partial<ClientUpdate>): Promise<Client> {
    const response = await fetch(`/api/clients/${clientId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      throw new Error(`Erreur API (${response.status})`)
    }
    return response.json()
  }
}
