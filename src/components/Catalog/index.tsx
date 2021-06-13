import React from 'react'
import { Container } from './styles';

import CatalogHeader from '../CatalogHeader'
import CatalogBody from '../CatalogBody'

function Catalog() {
  return (
    <Container  >
      <CatalogHeader />
      <CatalogBody />
    </Container>
  )
}

export default Catalog;
