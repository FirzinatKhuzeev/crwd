import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Contacts from './Contacts'
import Auth from './Auth'
import Checkout from './Checkout'
import styled from 'styled-components'

const MainBlock = styled.main`
`;

export const Main = () => (
  <MainBlock>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
      <Route path='/contact' component={Contacts} />
      <Route path='/signin' component={Auth} />
      <Route path='/checkout' component={Checkout} />
    </Switch>
  </MainBlock>
);