import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { IShopState } from '../../store/shop/types';
import ShopPreview from '../shop-preview';
import getShopData from '../../store/shop/actions';

interface IProps { }

type ShopPreviewProps = IProps & RouteComponentProps;

class ShopOverview extends React.Component<ShopPreviewProps, IShopState> {
    render() {
        return (
            <ShopOverviewContainer>
                {this.state.shopCollection.map(({ id, ...props }) => (<ShopPreview key={id} {...props} />))}
            </ShopOverviewContainer>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    shopData: getShopData()
});

export default connect(mapStateToProps)(ShopOverview);
