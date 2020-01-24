import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ShopOverviewContainer } from './styles';
import { ShopCollection } from '../../store/shop/types';
import ShopPreview from '../shop-preview';
import { selectShopCollection } from '../../store/shop/selectors';
import { getShopDataStart } from '../../store/shop/actions';
import { Dispatch } from 'redux';

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getShopData: () => dispatch(getShopDataStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverview);
