import React from 'react'
import ReactDOM from 'react-dom/client'

import { TrilogyProvider } from '@trilogy-ds/react'
import '@trilogy-ds/styles/dist/default/trilogy.css'

import '@assets/style.css'

import App from './app'

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <TrilogyProvider>
        <App />
      </TrilogyProvider>
    </React.StrictMode>,
  )
})
