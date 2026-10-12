import { useEffect, useState } from 'react'

import {
  Alert,
  Button,
  ButtonVariant,
  Column,
  Columns,
  Input,
  StatusState,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'

import { OfferService } from '@services/offer'

import type { Offer } from '@types'

const offerService = new OfferService()

export function Exercise() {
  const [offers, setOffers] = useState<Offer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    offerService
      .getOffers()
      .then(setOffers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Text level={TextLevels.ONE}>Loading plans…</Text>
  }

  if (error) {
    return <Alert status={StatusState.ERROR} title="Error" description={error} display />
  }

  return (
    <Columns multiline gap={4}>
      <Column size={12}>
        <Title level={TitleLevels.THREE}>Mobile plans</Title>
      </Column>

      <Column size={12} desktopSize={6}>
        <Input label="Search a plan" placeholder="e.g. sensation" />
      </Column>

      <Column size={12} desktopSize={6}>
        <Button variant={ButtonVariant.SECONDARY}>Sort by price</Button>
      </Column>

      {offers.map((offer) => (
        <Column key={offer.id} size={12} desktopSize={4}>
          <Text level={TextLevels.ONE} marginless>
            {offer.name}
          </Text>
          <Text level={TextLevels.TWO} marginless>
            {offer.data} — {offer.price.toFixed(2)} € / month
          </Text>
          <Text level={TextLevels.THREE}>{offer.categories.join(' • ')}</Text>
        </Column>
      ))}
    </Columns>
  )
}
