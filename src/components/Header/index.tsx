import React from 'react'
import { Container, Section, MenuIcon, SearchIcon, TextLogo } from './styles'

function Header() {
  return (
    <Container>

      <Section>
        <MenuIcon />
      </Section>

      <Section>
        <TextLogo to="/">
          SUNO <span className="bold">MOVIES</span>
        </TextLogo>
      </Section>

      <Section>
        <SearchIcon />
      </Section>
      
    </Container>
  )
}

export default Header