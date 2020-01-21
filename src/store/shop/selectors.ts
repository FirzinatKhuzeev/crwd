import { createSelector } from 'reselect';
import { AppState } from '..';
import { ShopState } from './types';

export const selectShopData = (state: AppState): ShopState => state.shop;

export const selectShopCollection = createSelector(
    [selectShopData],
    shopData => shopData.shopCollection
);

export const selectShopItem = (itemId: number) =>
    createSelector([selectShopData], shopData => {
        const values = shopData.shopCollection
            .map(x => x.items.find(y => y.id === itemId))
            .filter(i => i);

        return (values.length && values[0]) || null;
    });
