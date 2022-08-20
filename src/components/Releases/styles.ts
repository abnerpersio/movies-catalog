import styled, { keyframes } from "styled-components";

import { ReactComponent as EllipseSVG } from "../../images/ellipse.svg";

import Theather from "../../images/theather.png";

export const Container = styled.section`
  padding: 1rem;
  padding-bottom: 8rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  background-image: url(${Theather});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 480px) {
    background: transparent;
  }
`;

export const Heading = styled.div`
  padding: 0.75rem;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 10px;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 920px) {
    padding: 2rem;
    justify-content: flex-start;
  }
`;

export const Title = styled.h4`
  font-size: 1.25em;
  font-weight: 300;

  @media (max-width: 400px) {
    font-size: 1.1em;
  }

  & .bold {
    font-weight: 600;
  }
`;

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
