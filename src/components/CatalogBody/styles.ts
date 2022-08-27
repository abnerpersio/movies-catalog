import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0 2rem;
  max-width: 1000px;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    row-gap: 25px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }
`;

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

  & option {
    background: ${({ theme }) => theme.colors.dark[300]};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const DarkButton = styled.button`
  background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.dark[300]} 0%,
      ${({ theme }) => theme.colors.dark[100]} 100%
    ),
    ${({ theme }) => theme.colors.dark[300]};
  border: 2px solid ${({ theme }) => theme.colors.dark[100]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 10px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  & svg {
    display: inline-block;
    width: 1.5em;
  }

  & span {
    display: inline-block;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

type ButtonParams = {
  children?: string;
  active?: boolean;
  onClick?: () => void;
};

export const Button = styled.button<ButtonParams>`
  border: none;
  padding: 5px 10px;
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

  &.active {
    background: transparent !important;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export const CenterButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 25px;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const MoviesList = styled.div`
  margin-top: 45px;
  width: 100%;
`;
