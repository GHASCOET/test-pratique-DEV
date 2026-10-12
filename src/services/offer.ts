import type { Offer } from '@types'

import { mockOffers } from '../mocks/data/offers'

export class OfferService {
  public async getOffers(): Promise<Offer[]> {
    try {
      const response = await fetch('/api/offers')
      if (!response.ok) {
        throw new Error(`API error (${response.status})`)
      }
      return await response.json()
    } catch {
      return mockOffers
    }
  }
}
