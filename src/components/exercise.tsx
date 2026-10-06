import { useEffect, useState } from 'react'

import {
  Alert,
  Button,
  ButtonList,
  ButtonVariant,
  Column,
  Columns,
  Input,
  Select,
  SelectOption,
  StatusState,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'

import { ClientService } from '@services/client'

import type { Client } from '@types'

const clientService = new ClientService()

/**
 * Formulaire "Mes informations personnelles".
 *
 * Il récupère les données du client via le ClientService (GET /api/clients/:id)
 * puis les affiche dans des champs Trilogy.
 *
 * ⚠️ Pour le test : ce formulaire n'exploite volontairement qu'une PARTIE des
 * champs renvoyés par l'API. Voir public/swagger.yaml et la Statement ci-dessus.
 */
export function Exercise() {
  const [client, setClient] = useState<Client | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  // Champs actuellement exploités par le formulaire
  const [civilite, setCivilite] = useState('')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')

  // TODO (Partie B.1) : ajoutez un state pour `telephoneMobile`
  // TODO (Partie B.2) : ajoutez un state pour `dateNaissance`
  // TODO (Partie B.3 - bonus) : ajoutez un state pour `preferences.newsletter`

  useEffect(() => {
    clientService
      .getClient()
      .then((data) => {
        setClient(data)
        setCivilite(data.civilite)
        setPrenom(data.prenom)
        setNom(data.nom)
        setEmail(data.email)

        // TODO : initialisez ici les states ajoutés ci-dessus
        // (data.telephoneMobile, data.dateNaissance, data.preferences.newsletter)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleSubmit = async () => {
    if (!client) return
    setSaved(false)
    try {
      await clientService.updateClient(client.id, {
        civilite: civilite as Client['civilite'],
        prenom,
        nom,
        email,

        // TODO : envoyez ici les nouveaux champs dans le payload
        // telephoneMobile,
        // dateNaissance,
        // preferences: { ...client.preferences, newsletter },
      })
      setSaved(true)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  if (loading) {
    return <Text level={TextLevels.ONE}>Chargement des informations…</Text>
  }

  if (error) {
    return <Alert status={StatusState.ERROR} title="Erreur" description={error} display />
  }

  return (
    <Columns multiline gap={4}>
      <Column size={12}>
        <Title level={TitleLevels.THREE}>Mes informations personnelles</Title>
        <Text level={TextLevels.TWO}>
          Ces informations proviennent de l'API client (appel REST GET /api/clients/123456).
        </Text>
      </Column>

      <Column size={12} desktopSize={6}>
        <Select label="Civilité" selected={civilite} onChange={(e) => setCivilite(e.selectValue ?? '')}>
          <SelectOption value="MONSIEUR">Monsieur</SelectOption>
          <SelectOption value="MADAME">Madame</SelectOption>
          <SelectOption value="AUTRE">Autre</SelectOption>
        </Select>
      </Column>

      <Column size={12} desktopSize={6} />

      <Column size={12} desktopSize={6}>
        <Input label="Prénom" value={prenom} onChange={(e) => setPrenom(e.inputValue)} />
      </Column>

      <Column size={12} desktopSize={6}>
        <Input label="Nom" value={nom} onChange={(e) => setNom(e.inputValue)} />
      </Column>

      <Column size={12} desktopSize={6}>
        <Input type="email" label="E-mail" value={email} onChange={(e) => setEmail(e.inputValue)} />
      </Column>

      {/* TODO (Partie B.1) : ajoutez ici un <Input type="tel" label="Téléphone mobile" .../> */}

      {/* TODO (Partie B.2) : ajoutez ici un <Input type="date" label="Date de naissance" .../> */}

      {/* TODO (Partie B.3 - bonus) : ajoutez ici un <Switch label="Recevoir la newsletter" .../> */}

      <Column size={12}>
        <Alert
          display={saved}
          status={StatusState.SUCCESS}
          title="Modifications enregistrées"
          description="Les informations ont été envoyées à l'API (PUT /api/clients/123456)."
        />
      </Column>

      <Column size={12}>
        <ButtonList>
          <Button variant={ButtonVariant.PRIMARY} onClick={handleSubmit}>
            Enregistrer
          </Button>
        </ButtonList>
      </Column>
    </Columns>
  )
}
