import React from 'react'
import styled from 'styled-components'  

import Lottie from 'react-lottie';
import animation from '../../images/404-animation.json';

const Container = styled.section`
  padding: 1rem;
  padding-top: 3rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function ErrorPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animation,
  };

  return (
    <Container>

      <h3 style={{ textAlign: 'center' }}>Oops, Filme não encontrado!</h3>

       <Lottie 
        style={{
          maxWidth: '400px',
        }}
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
      />
      
    </Container>
  )
}

export default ErrorPage;
