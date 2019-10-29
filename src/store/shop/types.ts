export interface IShopCollection {
    id: number;
    title: string;
    category: string;
    items: IShopItem[]
}

export interface IShopItem {
    id: number;
    name: string;
    imageSrc: string;
    price: number;
}

export interface IShopState {
    shopCollection: IShopCollection[]
}

export const DATA_GATHERING_SUCCUSS = "DATA_GATHERING_SUCCUSS";

interface IGetShopDataAction {
    type: typeof DATA_GATHERING_SUCCUSS,
    payload: IShopState
}

export type ShopActionTypes = IGetShopDataAction;

