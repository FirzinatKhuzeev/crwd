import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { IShopState } from '../../store/shop/types';
import ShopPreview from '../shop-preview';
import { getShopData } from '../../store/shop/actions';

interface IProps {
    shopData: IShopState;
    isFetching: boolean;
    getShopData: any;
}

type DispatchProps = {
    getShopData: any;
};

class ShopOverview extends React.Component<IProps & DispatchProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        debugger;
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

const mapDispatchToProps = (dispatch: any) => ({
    getShopData: () => dispatch(getShopData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverview);
