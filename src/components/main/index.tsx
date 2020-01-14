import { Switch, Route, withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import React from 'react';
import Landing from '../landing';
import Contacts from '../contacts';
import Checkout from '../checkout';
import ShopOverview from '../shop-overview';
import ShopItemDetail from '../shop-item-detail';
import SignIn from '../sign-in';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import NotFound from '../not-found';
import { MainBlock } from './styles';

type OwnProps = {};

type UserState = {
    isAuthenticated: boolean | null;
};

type DispatchProps = {};

type Props = OwnProps & UserState & DispatchProps & RouteComponentProps;

const Main: React.FC<Props> = props => {
    return (
        <MainBlock>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/shop" exact component={ShopOverview} />
                <Route path="/shop/:category/:id" component={ShopItemDetail} />
                <Route path="/contact" component={Contacts} />
                <Route
                    exeact
                    path="/signin"
                    render={() => (props.isAuthenticated ? <Redirect to="/" /> : <SignIn />)}
                />
                <Route path="/checkout" component={Checkout} />
                <Route component={NotFound} />
            </Switch>
        </MainBlock>
    );
};

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Main as any));
