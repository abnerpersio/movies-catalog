import React from 'react'
import styled from 'styled-components'
import { Container, Heading, Title, EllipsePulsing } from './styles';

import Carousel from '../Carousel'

function Releases() {
  return (
    <Container>

      <Heading>
        <EllipsePulsing />
        <Title>
          <span className="bold">
            LANÇAMENTOS
          </span>
          {" "}
          DA SEMANA
        </Title>
      </Heading>

      <Carousel />
      
    </Container>
  )
}

export default Releases;

