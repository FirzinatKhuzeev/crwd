import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import ShopService from '../../api/shop-service';
import { IShopState, ShopActionTypes } from './types';
import { getShopDataStart, getShopDataSuccess, getShopDataFailed } from './actions';

export const getShopData: ActionCreator<ThunkAction<
    Promise<any>,
    IShopState,
    null,
    ShopActionTypes
>> = () => {
    return (dispatch: Dispatch) => {
        dispatch(getShopDataStart());
        return ShopService
            .getShopData()
            .then(response => {
                dispatch(getShopDataSuccess(response));
            })
            .catch(error => {
                console.error(error);
                dispatch(getShopDataFailed());
            });
    };
};
