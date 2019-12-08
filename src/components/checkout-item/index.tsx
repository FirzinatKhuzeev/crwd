import React from "react"
import { connect } from "react-redux"
import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemImage,
    TextContainer,
    CheckoutItemQuantity,
    AddItem,
    RemoveItem,
    QuantityValue,
    RemoveButton
} from "./styles";
import { removeItem, addItem, clearItem } from "../../store/checkout/actions";
import { IShopItemQuantity } from "../../store/checkout/types";
import { Dispatch } from "redux";

export interface ICheckoutProps {
    checkoutItem: IShopItemQuantity,
    addItem: (item: IShopItemQuantity) => void;
    removeItem: (item: IShopItemQuantity) => void;
    clearItem: (item: IShopItemQuantity) => void;
}

const CheckoutItemIml: React.FC<ICheckoutProps> =
    ({ checkoutItem, addItem, removeItem, clearItem }) => {
        return (
            <CheckoutItemContainer>
                <CheckoutItemImageContainer>
                    <CheckoutItemImage src={checkoutItem.imageSrc} alt={checkoutItem.name} />
                </CheckoutItemImageContainer>
                <TextContainer>{checkoutItem.name}</TextContainer>
                <CheckoutItemQuantity>
                    <AddItem onClick={() => addItem(checkoutItem)}>+</AddItem>
                    <QuantityValue >{checkoutItem.quantity}</QuantityValue>
                    <RemoveItem disabled={true} onClick={() => removeItem(checkoutItem)}>-</RemoveItem>
                </CheckoutItemQuantity>
                <TextContainer>${checkoutItem.price}</TextContainer>
                <RemoveButton onClick={() => clearItem(checkoutItem)}>&#10006;</RemoveButton>
            </CheckoutItemContainer>
        )
    };

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: IShopItemQuantity) => dispatch(addItem(item)),
    removeItem: (item: IShopItemQuantity) => dispatch(removeItem(item)),
    clearItem: (item: IShopItemQuantity) => dispatch(clearItem(item))
});

// workaround https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16990
type OwnProps = Omit<ICheckoutProps, keyof ReturnType<typeof mapDispatchToProps>>
export default connect(mapDispatchToProps, mapDispatchToProps)(CheckoutItemIml) as unknown as React.ComponentType<OwnProps>