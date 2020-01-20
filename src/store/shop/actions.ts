import {
    ShopActionTypes,
    IShopState,
    SHOP_DATA_GATHERING_SUCCESS,
    SHOP_DATA_GATHERING_START,
    SHOP_DATA_GATHERING_FAILED
} from './types';

export const getShopDataStart = (): ShopActionTypes => {
    return {
        type: SHOP_DATA_GATHERING_START,
        isFetching: true,
    }
}

export const getShopDataSuccess = (data: IShopState): ShopActionTypes => {
    return {
        type: SHOP_DATA_GATHERING_SUCCESS,
        payload: data,
        isFetching: false,
    };
}

export const getShopDataFailed = (): ShopActionTypes => {
    return {
        type: SHOP_DATA_GATHERING_FAILED,
        isFetching: false,
    };
}
