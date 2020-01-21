import {
    ADD_ITEM,
    REMOVE_ITEM,
    SHOW_CHECKOUT_MODAL,
    ShopItemQuantity,
    CheckoutActions,
    CLEAR_ITEM
} from './types';
import { ShopData } from '../shop/types';

export const addItem = (item: ShopData): CheckoutActions => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

export const removeItem = (item: ShopItemQuantity): CheckoutActions => {
    return {
        type: REMOVE_ITEM,
        payload: item
    };
};

export const clearItem = (item: ShopItemQuantity): CheckoutActions => {
    return {
        type: CLEAR_ITEM,
        payload: item
    };
};

export const showCheckoutModal = (): CheckoutActions => {
    return {
        type: SHOW_CHECKOUT_MODAL
    };
};
