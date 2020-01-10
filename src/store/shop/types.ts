export const DATA_GATHERING_SUCCESS = 'DATA_GATHERING_SUCCESS';
export const DATA_GATHERING_FAILED = 'DATA_GATHERING_FAILED';
export const DATA_GATHERING_START = 'DATA_GATHERING_START';

export interface IShopItem {
    id: number;
    name: string;
    imageSrc: string;
    price: number;
    description: string;
    size: string[];
    color: string[];
}

export interface IShopCollection {
    id: number;
    title: string;
    category: string;
    items: IShopItem[];
}

export interface IShopState {
    shopCollection: IShopCollection[];
    isFetching: boolean;
}

interface GetShopDataStartAction {
    type: typeof DATA_GATHERING_START;
    isFetching: boolean;
}

interface GetShopDataSuccessAction {
    type: typeof DATA_GATHERING_SUCCESS;
    payload: IShopState;
    isFetching: boolean;
}

interface GetShopDataFailedAction {
    type: typeof DATA_GATHERING_FAILED;
    isFetching: boolean;
}

export type ShopActionTypes =
    | GetShopDataStartAction
    | GetShopDataSuccessAction
    | GetShopDataFailedAction;
