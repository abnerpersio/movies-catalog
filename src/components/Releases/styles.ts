import styled from 'styled-components';

import Theather from '../../images/theather.png';

export const Container = styled.section`
  padding: 1rem;
  padding-bottom: 8rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  background-image: url(${Theather});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 480px) {
    background: transparent;
  }

  h4 {
    font-size: 1.25em;
    font-weight: 300;

    @media (max-width: 400px) {
      font-size: 1.1em;
    }

    & .bold {
      font-weight: 600;
    }
  }
`;
