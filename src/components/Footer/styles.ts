import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 140px;
  background: ${({ theme }) => theme.colors.dark[300]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;

  & * {
    margin: 0px;
  }
`;
