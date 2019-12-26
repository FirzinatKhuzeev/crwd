import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { IShopState } from '../../store/shop/types';
import ShopPreview from '../shop-preview';
import getShopData from '../../store/shop/actions';
import { Dispatch } from 'redux';

interface IProps {
    shopData: IShopState;
    getShopData: typeof getShopData;
}

class ShopOverview extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.props.getShopData();
    }

    render() {
        return (
            <ShopOverviewContainer>
                {this.props.shopData.shopCollection.map(({ id, ...shopProps }) => {
                    return <ShopPreview key={id} {...shopProps} />;
                })}
            </ShopOverviewContainer>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    shopData: state.shop,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getShopData: () => dispatch(getShopData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverview);
