import { ShopData } from '../shop/types';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SHOW_CHECKOUT_MODAL = 'SHOW_CHECKOUT_MODAL';
export const CLEAR_ITEM = 'CLEAR_ITEM';

export interface ShopItemQuantity extends ShopData {
    quantity: number;
}

export interface CheckoutState {
    showModal: boolean;
    checkoutItems: ShopItemQuantity[];
}

interface AddItem {
    type: typeof ADD_ITEM;
    payload: ShopData;
}

interface RemoveItem {
    type: typeof REMOVE_ITEM;
    payload: ShopItemQuantity;
}

interface ClearItem {
    type: typeof CLEAR_ITEM;
    payload: ShopItemQuantity;
}

interface ShowCheckout {
    type: typeof SHOW_CHECKOUT_MODAL;
}

export type CheckoutActions = AddItem | RemoveItem | ClearItem | ShowCheckout;
