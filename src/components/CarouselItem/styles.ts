import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

type ContainerProps = {
  className?: string;
};

const fadeIn = keyframes`
  from {opacity: 0.3}
  to {opacity: 1}
`;

export const Container = styled.section<ContainerProps>`
  display: none;
  width: 25%;
  padding: 2rem;
  vertical-align: top;
  animation: ${fadeIn} 0.5s forwards;

  @media (max-width: 920px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  &.active {
    display: inline-block;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  transition: 0.6s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transform: scale(0.98);
  }
`;

export const About = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5em;
  font-weight: 500;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Category = styled.p`
  margin-top: 5px;
  font-size: 1.2em;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const Rating = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`;
