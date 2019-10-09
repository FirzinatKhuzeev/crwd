import React from 'react';
import { Switch, Route } from 'react-router';
import { Items } from './Items';
import { Item } from './Item';

export default class Shop extends React.Component<any, any> {
    render() {
        return (
            <div>
                <span>Shop page</span>
                <Switch>
                    <Route exact path='/shop' component={Items} />
                    <Route path='/shop/item/:id' component={Item} />
                </Switch>
            </div>
        );
    }
}