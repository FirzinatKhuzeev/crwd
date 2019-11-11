import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { IShopState } from '../../store/shop/types';
import ShopPreview from '../shop-preview';

interface IProps {
    shopData: IShopState
}

class ShopOverview extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <ShopOverviewContainer>
                {this.props.shopData.shopCollection.map(({ id, ...shopProps }) => {
                    return (<ShopPreview key={id} {...shopProps} />)
                })}
            </ShopOverviewContainer>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    shopData: state.shop
});

export default connect(mapStateToProps)(ShopOverview);
