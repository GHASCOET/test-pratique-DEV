import type { Offer } from '@types'

export const mockOffers: Offer[] = [
  { id: '1', name: 'B&You 20Go', price: 9.99, data: '20 GB', categories: ['SIM only', '4G'] },
  { id: '2', name: 'B&You 100Go', price: 14.99, data: '100 GB', categories: ['5G', 'SIM only', 'Europe'] },
  { id: '3', name: 'Sensation 5G 150Go', price: 29.99, data: '150 GB', categories: ['5G', 'Europe', 'Smartphone'] },
  { id: '4', name: 'Sensation 250Go', price: 39.99, data: '250 GB', categories: ['5G', 'International', 'Smartphone'] },
  { id: '5', name: 'Kids 5Go', price: 4.99, data: '5 GB', categories: ['4G', 'Parental control'] },
  { id: '6', name: 'Travel World 50Go', price: 24.99, data: '50 GB', categories: ['International', 'Europe', '4G'] },
  { id: '7', name: 'Pro Unlimited', price: 49.99, data: 'Unlimited', categories: ['5G', 'Business', 'Smartphone'] },
]
