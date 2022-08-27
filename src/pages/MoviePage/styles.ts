import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const Section = styled.section`
  width: 100%;
  text-align: center;
`;

export const Button = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 0.5rem 1.2rem;
  background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary[500]} 0%,
      ${({ theme }) => theme.colors.primary[500]} 100%
    ),
    ${({ theme }) => theme.colors.primary[500]};
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primary[700]};
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  font-size: 1em;
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    background: transparent;
  }
`;
