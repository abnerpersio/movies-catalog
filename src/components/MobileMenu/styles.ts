import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 4.76rem;
  background-color: rgba(24, 24, 28, 0.95);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.dark[300]};
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  overflow-y: auto;

  section {
    display: flex;
    justify-content: flex-start;
    align-items: left;
    width: 80%;
    margin: 0 auto;
    max-width: 1000px;
    padding: 2rem 1.5rem;

    @media (max-width: 620px) {
      width: 95%;
      padding: 1.5rem 1rem;
    }
  }

  & * {
    margin: 0px;
  }

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.8s;
  border-bottom: solid 3px transparent;

  &.active {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const LinkWithScroll = styled(ScrollLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.8s;
  border-bottom: solid 3px transparent;

  &.active {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;
