import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const variants = {
  default: css`
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.primary[500]} 0%,
        ${({ theme }) => theme.colors.primary[500]} 100%
      ),
      ${({ theme }) => theme.colors.primary[500]};

    border: 2px solid ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.primary[700]};
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary[700]};
    }
  `,
  dark: css`
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.dark[300]} 0%,
        ${({ theme }) => theme.colors.dark[100]} 100%
      ),
      ${({ theme }) => theme.colors.dark[300]};

    border: 2px solid ${({ theme }) => theme.colors.dark[100]};
    box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.dark[300]};
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      background: ${({ theme }) => theme.colors.dark[300]};
    }
  `,
};

type Params = {
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'dark';
  hoverTransition?: boolean;
};

export const Button = styled.button<Params>`
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1em;
  transition: 0.6s;
  cursor: pointer;

  ${({ variant }) => (variant ? variants[variant] : variants.default)}

  ${({ hoverTransition }) =>
    hoverTransition &&
    css`
      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    `}

  ${({ active }) => active && 'background: transparent;'}

  svg {
    display: inline-block;
    width: 1.5em;

    & + span {
      margin-left: 10px;
    }
  }
`;
