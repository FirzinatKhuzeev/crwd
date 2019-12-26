import { IShopItemQuantity } from './types';
import { IShopItem } from '../shop/types';

export const addItem = (
    checkoutItems: IShopItemQuantity[],
    checkoutItemToAdd: IShopItem
): IShopItemQuantity[] => {
    if (checkoutItems.find(item => item.id === checkoutItemToAdd.id)) {
        return checkoutItems.map(
            (item): IShopItemQuantity =>
                item.id === checkoutItemToAdd.id
                    ? { ...checkoutItemToAdd, quantity: item.quantity + 1 }
                    : item
        );
    }

    return [...checkoutItems, { ...checkoutItemToAdd, quantity: 1 }];
};

export const removeItem = (
    checkoutItems: IShopItemQuantity[],
    checkoutItemToRemove: IShopItemQuantity
): IShopItemQuantity[] => {
    if (checkoutItemToRemove.quantity === 0) {
        return checkoutItems;
    }

    return checkoutItems.map(item =>
        item.id === checkoutItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    );
};
