import styled from 'styled-components';

import { ReactComponent as ChevronBackSVG } from '../../images/chevron-back.svg';
import { ReactComponent as ChevronFrontSVG } from '../../images/chevron-front.svg';

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
`;

export const ChevronBackIcon = styled(ChevronBackSVG)`
  stroke: #eaeaea;
  width: 1rem;
  position: absolute;
  top: 30%;
  left: 0px;
  transition: 0.5s;
  cursor: pointer;
  z-index: 100;

  &:hover {
    transform: scaleY(1.25);
  }

  &:hover * {
    stroke: #fe3189;
  }
`;

export const ChevronFrontIcon = styled(ChevronFrontSVG)`
  stroke: #eaeaea;
  width: 1rem;
  position: absolute;
  top: 30%;
  right: 0px;
  transition: 0.5s;
  cursor: pointer;
  z-index: 100;

  &:hover {
    transform: scaleY(1.25);
  }

  &:hover * {
    stroke: #fe3189;
  }
`;
