import styled from 'styled-components';

import { ReactComponent as SearchSVG } from '../../images/search.svg';

export const SearchIcon = styled(SearchSVG)`
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s;

  &.active * {
    stroke: ${({ theme }) => theme.colors.primary[500]};
  }

  &:hover * {
    stroke: ${({ theme }) => theme.colors.primary[500]};
  }
`;
