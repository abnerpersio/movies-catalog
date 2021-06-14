import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-bottom: 6rem;
  width: 100%;
`;

export const Heading = styled.div`
  padding: 4rem;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
  max-width: 1000px;

  & h1 {
    width: 100%;
    border-bottom: 1px solid #fe3189;
  }

  @media (min-width: 920px) {
    padding: 4rem;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const TrailerSection = styled.section`
  padding: 4rem;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  column-gap: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
