import { IShopItem } from '../shop/types';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SHOW_CHECKOUT_MODAL = 'SHOW_CHECKOUT_MODAL';
export const CLEAR_ITEM = 'CLEAR_ITEM';

export interface IShopItemQuantity extends IShopItem {
    quantity: number;
}

export interface ICheckoutState {
    showModal: boolean;
    checkoutItems: IShopItemQuantity[];
}

interface AddItem {
    type: typeof ADD_ITEM;
    payload: IShopItem;
}

interface RemoveItem {
    type: typeof REMOVE_ITEM;
    payload: IShopItemQuantity;
}

interface ClearItem {
    type: typeof CLEAR_ITEM;
    payload: IShopItemQuantity;
}

interface ShowCheckout {
    type: typeof SHOW_CHECKOUT_MODAL;
}

export type CheckoutActions = AddItem | RemoveItem | ClearItem | ShowCheckout;
