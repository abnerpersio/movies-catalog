import styled, { keyframes } from 'styled-components';

import { ReactComponent as EllipseSVG } from '../../images/ellipse.svg';

const PulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 1 }
  25% { transform: scale(1.25); opacity: .5 }
  50% { transform: scale(1.10); opacity: 1 }
  75% { transform: scale(1.3); opacity: .6 }
  100% { transform: scale(1); opacity: 1 }
`;

export const EllipsePulsing = styled(EllipseSVG)`
  animation: 2s ${PulseAnimation} infinite;
`;
