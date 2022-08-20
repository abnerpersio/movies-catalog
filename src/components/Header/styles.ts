import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  background: #212125;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  & * {
    margin: 0px;
  }
`;
