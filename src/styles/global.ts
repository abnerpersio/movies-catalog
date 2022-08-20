import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    outline: none;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: #1B1B1F;
    color: #EAEAEA;

    font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #212125;
  }

  ::-webkit-scrollbar-thumb {
    background: #9F9FA0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #000000;
  }
`;
