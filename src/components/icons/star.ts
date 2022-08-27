import styled from 'styled-components';

import { ReactComponent as StarSVG } from '../../images/star.svg';

export const StarIcon = styled(StarSVG)`
  fill: ${({ theme }) => theme.colors.primary[500]};
  stroke: ${({ theme }) => theme.colors.primary[500]};
`;
