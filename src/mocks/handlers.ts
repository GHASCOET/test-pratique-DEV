import type { Client } from '@types'

import { HttpResponse, http } from 'msw'

// Données client renvoyées par le mock REST.
// Elles respectent le schéma décrit dans public/swagger.yaml.
const client: Client = {
  id: '123456',
  civilite: 'MADAME',
  prenom: 'Camille',
  nom: 'Durand',
  email: 'camille.durand@email.fr',
  emailVerifie: true,
  telephoneMobile: '+33612345678',
  telephoneFixe: '+33145678900',
  dateNaissance: '1990-06-15',
  adressePostale: {
    numero: '12',
    libelleVoie: 'Rue de la République',
    complement: 'Bâtiment B, 3e étage',
    codePostal: '75011',
    ville: 'Paris',
    pays: 'France',
  },
  preferences: {
    newsletter: true,
    offresPartenaires: false,
    contactSms: true,
    langue: 'fr',
  },
  segment: 'GRAND_PUBLIC',
  dateCreationCompte: '2018-03-22T10:15:00Z',
}

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
