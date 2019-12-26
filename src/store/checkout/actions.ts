import {
    ADD_ITEM,
    REMOVE_ITEM,
    SHOW_CHECKOUT_MODAL,
    IShopItemQuantity,
    CheckoutActions,
    CLEAR_ITEM,
} from './types';
import { IShopItem } from '../shop/types';

export const addItem = (item: IShopItem): CheckoutActions => {
    return {
        type: ADD_ITEM,
        payload: item,
    };
};

export const removeItem = (item: IShopItemQuantity): CheckoutActions => {
    return {
        type: REMOVE_ITEM,
        payload: item,
    };
};

export const clearItem = (item: IShopItemQuantity): CheckoutActions => {
    return {
        type: CLEAR_ITEM,
        payload: item,
    };
};

export const showCheckoutModal = (): CheckoutActions => {
    return {
        type: SHOW_CHECKOUT_MODAL,
    };
};
