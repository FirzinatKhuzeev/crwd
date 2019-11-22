import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Landing from '../landing';
import Contacts from '../contacts';
import Auth from '../auth';
import Checkout from '../checkout';
import ShopOverview from '../shop-overview';
import ShopItemDetail from '../shop-item-detail';

const MainBlock = styled.main``;

// const PrivateRoute = props => {
//     const token = localStorage.getItem("token")
//     if (token) {
//         return <Route {...props} />
//     } else {
//         history.push('/login')
//     }
// }

const Main: React.FC<RouteComponentProps> = (props) => {
    return (
        <MainBlock>
            <Switch>
                <Route exact path="/" component={Landing} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/shop" exact component={ShopOverview} />
                <Route path="/shop/:category/:id" component={ShopItemDetail} />
                <Route path="/contact" component={Contacts} />
                <Route path="/signin" component={Auth} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </MainBlock>
    )
};

export default withRouter(Main);
