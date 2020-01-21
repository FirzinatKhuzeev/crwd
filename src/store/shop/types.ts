export const SHOP_DATA_GATHERING_SUCCESS = 'SHOP_DATA_GATHERING_SUCCESS';
export const SHOP_DATA_GATHERING_FAILED = 'SHOP_DATA_GATHERING_FAILED';
export const SHOP_DATA_GATHERING_START = 'SHOP_DATA_GATHERING_START';

export interface ShopData {
    id: number;
    name: string;
    imageSrc: string;
    price: number;
    description: string;
    size: string[];
    color: string[];
}

export interface ShopCollection {
    id: number;
    title: string;
    category: string;
    items: ShopData[];
}

export interface ShopState {
    shopCollection: ShopCollection[];
    isFetching: boolean;
}

interface GetShopDataStartAction {
    type: typeof SHOP_DATA_GATHERING_START;
    isFetching: boolean;
}

interface GetShopDataSuccessAction {
    type: typeof SHOP_DATA_GATHERING_SUCCESS;
    payload: ShopState;
    isFetching: boolean;
}

interface GetShopDataFailedAction {
    type: typeof SHOP_DATA_GATHERING_FAILED;
    isFetching: boolean;
}

export type ShopActionTypes =
    | GetShopDataStartAction
    | GetShopDataSuccessAction
    | GetShopDataFailedAction;
