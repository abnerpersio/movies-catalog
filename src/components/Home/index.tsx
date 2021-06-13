import React from 'react'
import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'
import Releases from '../Releases'
import Catalog from '../Catalog'

import { DataProvider } from '../DataContext'

function Home() { 
  return (
    <DataProvider>
      <Container>
        <Header />

        <Releases />
        <Catalog />

        <Footer />
      </Container>
    </DataProvider>
  )
}

export default Home;