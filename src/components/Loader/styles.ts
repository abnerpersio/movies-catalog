import styled, { keyframes } from 'styled-components';

const loadAnimation = keyframes`
 0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 24, 28, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;

  .load {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;

    div {
      position: absolute;
      border: 4px solid #fe3189;
      opacity: 1;
      border-radius: 50%;
      animation: ${loadAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  }
`;
