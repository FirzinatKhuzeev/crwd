import { createSelector } from 'reselect';
import { AppState } from '..';
import { CheckoutState } from './types';

const selectCheckout = (state: AppState): CheckoutState => state.checkout;

export const selectCheckoutItems = createSelector([selectCheckout], item => item.checkoutItems);

export const selectCheckoutTotal = createSelector([selectCheckoutItems], items =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectCheckoutCount = createSelector([selectCheckoutItems], items =>
    items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectShowModal = createSelector([selectCheckout], items => items.showModal);
