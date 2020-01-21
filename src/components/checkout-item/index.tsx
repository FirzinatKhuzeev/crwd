import React from 'react';
import { connect } from 'react-redux';
import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemImage,
    TextContainer,
    CheckoutItemQuantity,
    AddItem,
    RemoveItem,
    QuantityValue,
    RemoveButton,
    CheckoutItemDescription
} from './styles';
import { removeItem, addItem, clearItem } from '../../store/checkout/actions';
import { ShopItemQuantity } from '../../store/checkout/types';
import { Dispatch } from 'redux';

type OwnProps = {
    checkoutItem: ShopItemQuantity;
};

type StateProps = {};

type DispatchProps = {
    addItem: (item: ShopItemQuantity) => void;
    removeItem?: (item: ShopItemQuantity) => void;
    clearItem: (item: ShopItemQuantity) => void;
};

type Props = OwnProps & StateProps & DispatchProps;

const CheckoutItem: React.FC<Props> = ({ checkoutItem, addItem, removeItem, clearItem }) => {
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={checkoutItem.imageSrc} alt={checkoutItem.name} />
            </CheckoutItemImageContainer>
            <CheckoutItemDescription>
                <TextContainer>{checkoutItem.name}</TextContainer>
                <CheckoutItemQuantity>
                    <AddItem onClick={() => addItem(checkoutItem)} />
                    <QuantityValue>{checkoutItem.quantity}</QuantityValue>
                    <RemoveItem onClick={() => removeItem && removeItem(checkoutItem)} />
                </CheckoutItemQuantity>
                <TextContainer>${checkoutItem.price}</TextContainer>
            </CheckoutItemDescription>
            <RemoveButton onClick={() => clearItem(checkoutItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: ShopItemQuantity) => dispatch(addItem(item)),
    removeItem: (item: ShopItemQuantity) =>
        item.quantity > 1 ? dispatch(removeItem(item)) : undefined,
    clearItem: (item: ShopItemQuantity) => dispatch(clearItem(item))
});

export default connect<StateProps, DispatchProps, OwnProps>(null, mapDispatchToProps)(CheckoutItem);
