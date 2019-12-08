import {
    ADD_ITEM,
    REMOVE_ITEM,
    SHOW_CHECKOUT_MODAL,
    CheckoutActions,
    ICheckoutState,
    CLEAR_ITEM
} from './types'
import { addItem, removeItem } from './utils';

let initialState: ICheckoutState = {
    showModal: false,
    checkoutItems: []
};

export const checkoutReducer = (
    state = initialState,
    action: CheckoutActions
): ICheckoutState => {

    console.log('ACTION type: ', action.type)
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                checkoutItems: addItem(state.checkoutItems, action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                checkoutItems: removeItem(state.checkoutItems, action.payload)
            };
        case CLEAR_ITEM:
            return {
                ...state,
                checkoutItems: state.checkoutItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        case SHOW_CHECKOUT_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            }
        default:
            return state
    }
};