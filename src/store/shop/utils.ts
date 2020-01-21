import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import ShopService from '../../api/shop-service';
import { ShopState, ShopActionTypes } from './types';
import { getShopDataStart, getShopDataSuccess, getShopDataFailed } from './actions';

export const getShopData: ActionCreator<ThunkAction<
    Promise<any>,
    ShopState,
    null,
    ShopActionTypes
>> = () => {
    return (dispatch: Dispatch) => {
        dispatch(getShopDataStart());
        return ShopService.getShopData()
            .then(response => {
                dispatch(getShopDataSuccess(response));
            })
            .catch(error => {
                console.error(error);
                dispatch(getShopDataFailed());
            });
    };
};
