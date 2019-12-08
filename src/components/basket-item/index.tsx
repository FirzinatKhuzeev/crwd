import React from "react"
import { IShopItemQuantity } from "../../store/checkout/types";
import {
    BasketItemContainer,
    BasketItemImage,
    BasketItemDetails,
    ItemName,
    ItemPrice
} from "./styles";

interface IBasketProps {
    checkoutItem: IShopItemQuantity
}

const BasketItem: React.FC<IBasketProps> = ({ checkoutItem }) => (
    <BasketItemContainer>
        <BasketItemImage src={checkoutItem.imageSrc} alt="item" />
        <BasketItemDetails>
            <ItemName>{checkoutItem.name}</ItemName>
            <ItemPrice>
                {checkoutItem.quantity}x ${checkoutItem.price}
            </ItemPrice>
        </BasketItemDetails>
    </BasketItemContainer>
);

export default BasketItem;
