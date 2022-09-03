import styled from 'styled-components';

export const Select = styled.select`
  background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.dark[300]} 0%,
      ${({ theme }) => theme.colors.dark[200]} 100%
    ),
    ${({ theme }) => theme.colors.dark[300]};

  border: 2px solid ${({ theme }) => theme.colors.dark[100]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 10px;
  font-weight: 600;
  font-size: 1em;

  option {
    background: ${({ theme }) => theme.colors.dark[300]};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
