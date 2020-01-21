import { ShopItemQuantity } from './types';
import { ShopData } from '../shop/types';

export const addItem = (
    checkoutItems: ShopItemQuantity[],
    checkoutItemToAdd: ShopData
): ShopItemQuantity[] => {
    if (checkoutItems.find(item => item.id === checkoutItemToAdd.id)) {
        return checkoutItems.map(
            (item): ShopItemQuantity =>
                item.id === checkoutItemToAdd.id
                    ? {
                          ...checkoutItemToAdd,
                          quantity: item.quantity + 1
                      }
                    : item
        );
    }

    return [...checkoutItems, { ...checkoutItemToAdd, quantity: 1 }];
};

export const removeItem = (
    checkoutItems: ShopItemQuantity[],
    checkoutItemToRemove: ShopItemQuantity
): ShopItemQuantity[] => {
    if (checkoutItemToRemove.quantity === 0) {
        return checkoutItems;
    }

    return checkoutItems.map(item =>
        item.id === checkoutItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    );
};
