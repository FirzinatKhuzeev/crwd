import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { IShopState } from '../../store/shop/types';
import ShopPreview from '../shop-preview';
import { ThunkDispatch } from 'redux-thunk';
import getShopData from '../../store/shop/actions';
import { AnyAction } from 'redux';

interface IProps {
    shopData: IShopState
}

class ShopOverview extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        getShopData();
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        getData: () => dispatch(getShopData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopOverview);
