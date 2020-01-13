import React, { useEffect } from 'react';
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


const ShopOverview: React.FC<IProps> = (props: IProps) => {
    useEffect(() => {
        props.getShopData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ShopOverviewContainer>
            {props.shopData.shopCollection.map(({ id, ...shopProps }) => {
                return <ShopPreview key={id} {...shopProps} />;
            })}
        </ShopOverviewContainer>
    );
}

const mapStateToProps = (state: AppState) => ({
    shopData: state.shop,
});

const mapDispatchToProps = (dispatch: any) => ({
    getShopData: () => dispatch(getShopData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverview);
