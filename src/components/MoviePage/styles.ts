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
  background: linear-gradient(180deg, #fe3189 0%, #fe3189 100%), #fe3189;
  box-shadow: 0px 0px 6px #ff0772;
  border: 1px solid #fe3189;
  border-radius: 4px;
  color: #eaeaea;
  font-weight: 600;
  font-size: 1em;
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    background: transparent;
  }
`;
