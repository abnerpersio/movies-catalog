import styled from 'styled-components';

import { ReactComponent as MenuSVG } from '../../images/menu.svg';

export const MenuIcon = styled(MenuSVG)`
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;

  &.active * {
    stroke: ${({ theme }) => theme.colors.primary[500]};
  }

  &:hover * {
    stroke: ${({ theme }) => theme.colors.primary[500]};
  }
`;
