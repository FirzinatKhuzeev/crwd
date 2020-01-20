import { createSelector } from 'reselect';
import { AppState } from '..';

const selectCheckout = (state: AppState) => state.checkout;

export const selectCheckoutItems = createSelector(
    [selectCheckout],
    item => item.checkoutItems
);

export const selectCheckoutTotal = createSelector(
    [selectCheckoutItems],
    items => items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectCheckoutCount = createSelector(
    [selectCheckoutItems],
    items => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectShowModal = createSelector(
    [selectCheckout],
    items => items.showModal
)
