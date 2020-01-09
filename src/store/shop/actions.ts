import { IShopState, ShopActionTypes, DATA_GATHERING_SUCCESS } from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { Action } from 'redux';
import ShopService from '../../api/shop-service';


export default function getShopData(): ShopActionTypes {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: shopData,
    };
}

export const fetchShopData = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => async dispatch => {
    dispatch({
        type: DATA_GATHERING_SUCCESS,
        payload: ShopService.getShopData(),
    });
};
