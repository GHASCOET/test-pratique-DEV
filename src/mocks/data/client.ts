import type { Client } from '@types'

// Données client de référence utilisées par MSW
// et comme fallback local si le service worker n'est pas disponible.
export const mockClient: Client = {
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
