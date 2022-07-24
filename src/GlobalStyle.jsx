import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  :root {
       --vh: 100%;
   }

`;

export default GlobalStyle;
