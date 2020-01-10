import React from 'react';
import { IShopItemQuantity } from '../../store/checkout/types';
import {
    BasketItemContainer,
    BasketItemImage,
    BasketItemDetails,
    ItemName,
    ItemPrice,
} from './styles';

type Props = {
    checkoutItem: IShopItemQuantity;
}

const BasketItem: React.FC<Props> = ({ checkoutItem }) => (
    <BasketItemContainer>
        <BasketItemImage src={checkoutItem.imageSrc} alt="item" />
        <BasketItemDetails>
            <ItemName>{checkoutItem.name}</ItemName>
            <ItemPrice>
                {checkoutItem.quantity} x ${checkoutItem.price}
            </ItemPrice>
        </BasketItemDetails>
    </BasketItemContainer>
);

export default BasketItem;
