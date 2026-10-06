import type { Adresse } from './adresse'
import type { Preferences } from './preferences'

// Types alignés sur le schéma "Client" du swagger (public/swagger.yaml)
export interface Client {
  id: string
  civilite: 'MONSIEUR' | 'MADAME' | 'AUTRE'
  prenom: string
  nom: string
  email: string
  emailVerifie: boolean
  telephoneMobile: string
  telephoneFixe: string
  dateNaissance: string
  adressePostale: Adresse
  preferences: Preferences
  segment: 'GRAND_PUBLIC' | 'PRO' | 'PREMIUM'
  dateCreationCompte: string
}

// Champs modifiables du client (schéma "ClientUpdate" du swagger)
export type ClientUpdate = Pick<
  Client,
  'civilite' | 'prenom' | 'nom' | 'email' | 'telephoneMobile' | 'dateNaissance' | 'adressePostale' | 'preferences'
>
