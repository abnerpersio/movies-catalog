import styled, { css } from 'styled-components';

import { ReactComponent as ChevronBackSVG } from '../../images/chevron-back.svg';
import { ReactComponent as ChevronFrontSVG } from '../../images/chevron-front.svg';

const iconStyling = css`
  stroke: ${({ theme }) => theme.colors.secondary};
  width: 1rem;
  position: absolute;
  top: 30%;
  transition: 0.5s;
  cursor: pointer;
  z-index: 10;

  &:hover {
    transform: scaleY(1.25);

    * {
      stroke: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;

export const ChevronLeftIcon = styled(ChevronBackSVG)`
  ${iconStyling}
  left: 0px;
`;

export const ChevronRightIcon = styled(ChevronFrontSVG)`
  ${iconStyling}
  right: 0px;
`;
