import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {opacity: 0.3}
  to {opacity: 1}
`;

interface IContainer {
  className: string | undefined;
}

export const Container = styled.section<IContainer>`
  display: inline-block;
  vertical-align: top;
  column-gap: 20px;
  width: 50%;
  margin: 15px 0px;
  padding: 0 2.5rem 0 0;
  animation: ${fadeIn} 0.5s forwards;

  &.list-display {
    padding: 0px;
    display: block;
    width: 100%;
    margin: 30px 0px;
  }

  @media (max-width: 800px) {
    padding: 0px;
    display: block;
    width: 100%;
    margin: 30px 0px;
  }
`;

export const Image = styled.img`
  display: inline-block;
  vertical-align: top;
  width: 40%;
  border-radius: 4px;
  transition: 0.6s;

  &.list-display {
    width: 20%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    &.list-display {
      width: 100%;
    }

    padding: 1rem;
    width: 100%;
  }
`;

export const About = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  width: 60%;
  padding-left: 1.5rem;

  @media (max-width: 480px) {
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
  }
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: #eaeaea;
  font-size: 1.5em;
  font-weight: 500;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const Category = styled.p`
  margin-top: 5px;
  font-size: 1.2em;
  font-weight: 300;
  color: #fe3189;
`;

export const Description = styled.p`
  margin-top: 5px;
  font-size: 0.7em;
  font-weight: 300;
  color: #eaeaea;
`;

export const Rating = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`;
