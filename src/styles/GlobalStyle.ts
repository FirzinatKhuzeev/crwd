import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8;
    color: #4a4a4a;
    font-weight: lighter;
    margin: 0;
    height: 100%;
    font-family: "Open Sans Condensed", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #4a4a4a;
  }
`;
