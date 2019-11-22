import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8;
    margin: 0;
    font-family: 'Open Sans Condensed';
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;
