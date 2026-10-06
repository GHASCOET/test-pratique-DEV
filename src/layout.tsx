import React from 'react'

import { Container, Hero, Title, TitleLevels, TitleMarkup, View } from '@trilogy-ds/react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      <Hero>
        <Container>
          <View>
            <Title markup={TitleMarkup.H1} level={TitleLevels.ONE}>
              Espace client — Test technique
            </Title>
          </View>
        </Container>
      </Hero>
      {children}
      <footer className="footer">Bonne chance 🚀</footer>
    </>
  )
}
