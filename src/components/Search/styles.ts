import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 4.76rem;
  background-color: rgba(24, 24, 28, 0.95);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: #212125;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  overflow-y: auto;

  & * {
    margin: 0px;
  }

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 2rem 1.5rem;

  @media (max-width: 620px) {
    width: 95%;
    padding: 1.5rem 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #eaeaea;
  font-size: 1.2em;
  padding-bottom: 1.2rem;
  border-bottom: 2px solid #fe3189;

  &:focus {
    border-color: #ff0772;
  }
`;

export const ResultsSection = styled.section`
  align-items: left;
  text-align: left;
  width: 80%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 2rem 1.5rem;
  padding-bottom: 8rem;
  overflow: auto;

  @media (max-width: 620px) {
    width: 95%;
    padding: 2.5rem 1rem;
  }
`;
