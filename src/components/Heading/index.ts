import styled from 'styled-components';

export const Heading = styled.div`
  padding: 0.75rem;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 10px;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 920px) {
    padding: 2rem;
    justify-content: flex-start;
  }
`;
