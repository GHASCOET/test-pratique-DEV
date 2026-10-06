import { Divider, Section, Spacer, SpacerSize, Text, Title, TitleLevels, TypographyBold } from '@trilogy-ds/react'

export function Statement() {
  return (
    <Section>
      <Title level={TitleLevels.TWO}>Énoncé</Title>
      <Text>
        Ce formulaire « Mes informations personnelles » est construit avec le design system{' '}
        <span className="has-text-weight-semibold">Trilogy</span> et alimenté par un appel REST vers une API mockée en
        local (MSW). Consultez <code>public/swagger.yaml</code> pour la documentation complète de l'API, et ouvrez
        l'onglet <span className="has-text-weight-semibold">Réseau</span> du navigateur pour voir la réponse de{' '}
        <code>GET /api/clients/123456</code>.
      </Text>

      <Spacer size={SpacerSize.FIVE} />

      <Title level={TitleLevels.THREE}>Partie A — Analyse (sans code)</Title>
      <Text>
        Ouvrez <code>public/swagger.yaml</code> et la réponse de l'API, puis répondez dans un fichier{' '}
        <code>REPONSES.md</code> (à créer) :
      </Text>
      <div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 1
          </Text>
          <Text>
            Quels champs sont renvoyés par l'API mais ne sont PAS affichés dans le formulaire actuel ? Listez-les.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 2
          </Text>
          <Text>
            Parmi ces champs, lesquels vous semblent pertinents à ajouter au formulaire pour un client, et pourquoi ?
            (pensez à l'utilité pour l'utilisateur)
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 3
          </Text>
          <Text>
            Y a-t-il des champs du schéma <code>Client</code> qu'il ne faudrait pas rendre modifiables par le client ?
            Lesquels, et pourquoi ? (indice : comparez les schémas <code>Client</code> et <code>ClientUpdate</code>)
          </Text>
        </div>
      </div>

      <Spacer size={SpacerSize.FIVE} />
      <Divider />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={TitleLevels.THREE}>Partie B — Évolution guidée (un peu de code)</Title>
      <Text>
        Dans <code>src/components/exercise.tsx</code>, en vous inspirant des champs déjà en place (<code>useState</code>{' '}
        → initialisation dans le <code>useEffect</code> → composant Trilogy → envoi dans <code>handleSubmit</code>),
        complétez les 3 TODOs du fichier :
      </Text>
      <div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            1. Téléphone mobile
          </Text>
          <Text>
            Ajoutez le champ <code>telephoneMobile</code> au formulaire.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            2. Date de naissance
          </Text>
          <Text>
            Ajoutez le champ <code>dateNaissance</code> au formulaire.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            3. (Bonus) Newsletter
          </Text>
          <Text>
            Ajoutez un interrupteur pour la préférence <code>preferences.newsletter</code> — le composant Trilogy
            s'appelle <code>Switch</code>.
          </Text>
        </div>
      </div>

      <Spacer size={SpacerSize.FIVE} />
      <Text>
        <span className="has-text-weight-semibold">Durée indicative :</span> 45 minutes à 1 heure.
      </Text>
    </Section>
  )
}
