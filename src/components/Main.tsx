import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Contacts from './Contacts'

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/contact' component={Contacts}/>
    </Switch>
  </main>
)