import React from 'react';
import { Switch, Route } from 'react-router';
import { Items } from './Items';
import { Item } from './Item';

export default class Shop extends React.Component<any, any> {
    render() {
        return (
            <Switch>
                <Route exact path='/item' component={Items} />
                <Route path='/item/:id' component={Item} />
            </Switch>
        );
    }
}