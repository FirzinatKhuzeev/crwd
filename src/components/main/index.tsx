import { Switch, Route } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components';
import Landing from '../landing';
import Shop from '../shop';
import Contacts from '../contacts';
import Auth from '../auth';
import Checkout from '../checkout';

const MainBlock = styled.main`
`;

const Main = () => (
  <MainBlock>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/shop' component={Shop} />
      <Route path='/contact' component={Contacts} />
      <Route path='/signin' component={Auth} />
      <Route path='/checkout' component={Checkout} />
    </Switch>
  </MainBlock>
);

export default Main;