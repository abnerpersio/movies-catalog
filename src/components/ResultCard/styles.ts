import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(Link)`
  text-decoration: none;
  color: #eaeaea;
  width: calc((100% / 2) - 1.5rem);
  display: inline-block;
  background: #252529;
  border: 1px solid #313136;
  border-radius: 4px;
  padding: 1.5rem;
  margin: 0.6rem 0.5rem;
  cursor: pointer;
  transition: 0.8s;

  &:hover {
    border: 1px solid #eaeaea;
    transform: scale(0.98);
  }

  @media (max-width: 800px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const Image = styled.img`
  display: inline-block;
  vertical-align: top;
  width: 25%;
  border-radius: 4px;
  transition: 0.6s;

  @media (max-width: 480px) {
    width: 40%;
  }
`;

export const About = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: left;
  width: 75%;
  padding-left: 1.5rem;
  word-wrap: break-word;

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const Title = styled.h4`
  text-decoration: none;
  color: #eaeaea;
  font-size: 1.5em;
  font-weight: 500;
  transition: 0.4s;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const Category = styled.p`
  margin-top: 5px;
  font-size: 1.2em;
  font-weight: 300;
  color: #fe3189;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

export const Rating = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;
