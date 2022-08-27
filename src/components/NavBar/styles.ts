import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

import { ReactComponent as MenuSVG } from '../../images/menu.svg';
import { ReactComponent as SearchSVG } from '../../images/search.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0rem 2rem;
  max-width: 1000px;

  & * {
    margin: 0px;
  }

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: #eaeaea;
      font-style: regular;
      font-weight: 500;

      &.logo {
        font-size: 1.17em;
      }

      & .bold {
        color: #fe3189;
        font-weight: 700;
      }
    }

    &.nav {
      column-gap: 30px;
    }

    &.mobile-menu {
      display: none;

      @media (max-width: 920px) {
        display: block;
      }
    }

    @media (max-width: 920px) {
      & .desktop-menu {
        display: none;
      }
    }
  }
`;

export const MenuIcon = styled(MenuSVG)`
  cursor: pointer;
  stroke: #eaeaea;
  transition: 0.2s;

  &.active * {
    stroke: #fe3189;
  }

  &:hover * {
    stroke: #fe3189;
  }
`;

export const SearchIcon = styled(SearchSVG)`
  cursor: pointer;
  stroke: #eaeaea;
  transition: 0.3s;

  &.active * {
    stroke: #fe3189;
  }

  &:hover * {
    stroke: #fe3189;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #eaeaea;
  transition: 0.8s;

  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px transparent;
    margin-top: 1.6rem;
    margin-bottom: -1.6rem;
    transition: 0.8s;
  }

  &.active {
    &:after {
      border-color: #fe3189;
    }
  }

  &:hover {
    color: #fe3189;

    &:after {
      border-color: #fe3189;
      transition: width 0.3s;
    }
  }
`;

export const LinkWithScroll = styled(ScrollLink)`
  text-decoration: none;
  cursor: pointer;
  color: #eaeaea;
  transition: 0.8s;

  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px transparent;
    margin-top: 1.6rem;
    margin-bottom: -1.6rem;
    transition: 0.8s;
  }

  &.active {
    &:after {
      border-color: #fe3189;
    }
  }

  &:hover {
    color: #fe3189;

    &:after {
      border-color: #fe3189;
      transition: width 0.3s;
    }
  }
`;
