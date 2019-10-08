import React from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './components/Landing/Home';
import Contacts from './components/Contact/Contacts';
import Shop from './components/Shop/Shop';
import Auth from './components/SignIn/Auth';
import Checkout from './components/Checkout/Checkout';

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

const A = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: block;
  color: black;
  width: 45px;
  height: 45px;
  /* left: 50%;
  top: 50%; */
  background-color: rgba(0,0,0,.07);
  border-radius: 50%;
  position: relative;

  &:before {
    content: 'CRWD';
    position: absolute;
    transform: translateY(50%);
  }
`;

// const routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/shop',
//     component: Shop
//   },
//   {
//     path: '/contact',
//     component: Contacts,
//   },
//   {
//     path: '/signin',
//     component: Auth,
//   }
// ]

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <Navbar>
          <Logo to="/" />
          <Ul>
            <Li>
              <A to="/shop">Shop</A>
            </Li>
            <Li>
              <A to="/contact">Contact</A>
            </Li>
            <Li>
              <A to="/signin">Sign in</A>
            </Li>
            <Li>
              <A to="/checkout">
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
      <div>
        <Route patch="/" exect component={Home}></Route>
        <Route patch="/contact" component={Contacts}></Route>
        <Route patch="/shop" component={Shop}></Route>
        <Route patch="/singin" component={Auth}></Route>
        <Route patch="/checkout" component={Checkout}></Route>
      </div>
    </div>
  );
}

export default App;
