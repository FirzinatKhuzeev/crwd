import {
    ShopActionTypes,
    IShopState,
    DATA_GATHERING_SUCCESS,
    DATA_GATHERING_START,
    DATA_GATHERING_FAILED
} from './types';
import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import ShopService from '../../api/shop-service';

export const getShopDataStart = (): ShopActionTypes => {
    return {
        type: DATA_GATHERING_START,
        isFetching: true,
    }
}

export const getShopDataSuccess = (data: IShopState): ShopActionTypes => {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: data,
        isFetching: false,
    };
}

export const getShopDataFailed = (): ShopActionTypes => {
    return {
        type: DATA_GATHERING_FAILED,
        isFetching: false,
    };
}

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
