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
}

export const DATA_GATHERING_SUCCESS = 'DATA_GATHERING_SUCCESS';

interface GetShopDataAction {
    type: typeof DATA_GATHERING_SUCCESS;
    payload: IShopState;
}

export type ShopActionTypes = GetShopDataAction;
