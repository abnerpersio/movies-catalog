import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as MenuSVG } from '../../images/menu.svg';
import { ReactComponent as SearchSVG } from '../../images/search.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  & * {
    margin: 0px;
  }
`;

export const Section = styled.section``;

export const TextLogo = styled(Link)`
  text-decoration: none;
  color: #eaeaea;
  font-size: 1.17em;
  font-style: regular;
  font-weight: 500;

  & .bold {
    color: #fe3189;
    font-weight: 700;
  }
`;

export const MenuIcon = styled(MenuSVG)`
  cursor: pointer;
  stroke: #eaeaea;

  &:hover * {
    transition: 0.2s;
    stroke: #fe3189;
  }
`;

export const SearchIcon = styled(SearchSVG)`
  cursor: pointer;
  stroke: #eaeaea;

  &:hover * {
    transition: 0.3s;
    stroke: #fe3189;
  }
`;
