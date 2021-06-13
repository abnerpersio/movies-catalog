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

  &:hover * {
    cursor: pointer;
    stroke: #ffffff;
  }
`;

export const ChevronFrontIcon = styled(ChevronFrontSVG)`
  stroke: #eaeaea;
  width: 1rem;
  position: absolute;
  top: 30%;
  right: 0px;

  &:hover * {
    cursor: pointer;
    stroke: #ffffff;
  }
`;
