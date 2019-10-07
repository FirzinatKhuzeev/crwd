import React from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8;
  }
`;

const Navbar = styled.nav`
  padding-left: 75px;
  padding-right: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

const Li = styled.li`
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: white;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;

const Logo = styled.a`
  text-decoration: none;
  display: block;
  width: 45px;
  height: 45px;
  left: 50%;
  top: 50%;
  background-color: rgba(0,0,0,.07);
  border-radius: 50%;
  position: relative;

  &:before {
    content: 'CRWD';
    position: absolute;
    transform: translateY(50%);
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <Navbar>
          <div><Logo /></div>
          <Ul>
            <Li>
              <A href="/shop">Shop</A>
            </Li>
            <Li>
              <A href="/contact">Contact</A>
            </Li>
            <Li>
              <A href="/signin">Sign in</A>
            </Li>
            <Li>
              <A href="/signin">
                <svg enable-background="new 0 0 50 50" height="25px" id="shopping_bag" version="1.1" viewBox="0 0 50 50" width="25px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8,14L4,49h42l-4-35H8z" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                  <circle cx="34" cy="19" r="2" />
                  <circle cx="16" cy="19" r="2" />
                </svg>
              </A>
            </Li>
          </Ul>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
