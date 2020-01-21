import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { ShopCollection } from '../../store/shop/types';
import ShopPreview from '../shop-preview';
import { getShopData } from '../../store/shop/utils';
import { selectShopCollection } from '../../store/shop/selectors';

type IProps = {
    shopDataCollection: ShopCollection[];
    isFetching: boolean;
    getShopData: () => void;
};

const ShopOverview: React.FC<IProps> = (props: IProps) => {
    useEffect(() => {
        props.getShopData();
    }, [props]);

    return (
        <ShopOverviewContainer>
            {props.shopDataCollection.map(({ id, ...shopProps }) => {
                return <ShopPreview key={id} {...shopProps} />;
            })}
        </ShopOverviewContainer>
    );
};

const mapStateToProps = (state: AppState) => ({
    shopDataCollection: selectShopCollection(state)
});

const mapDispatchToProps = (dispatch: any) => ({
    getShopData: () => dispatch(getShopData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverview);
