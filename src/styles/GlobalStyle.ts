import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8;
    color: #4a4a4a;
    font-weight: lighter;
    margin: 0;
    font-family: "Open Sans Condensed", sans-serif;
    padding: 20px 40px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #4a4a4a;
  }
`;
