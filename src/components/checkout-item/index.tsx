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
    CheckoutItemDescription,
} from './styles';
import { removeItem, addItem, clearItem } from '../../store/checkout/actions';
import { IShopItemQuantity } from '../../store/checkout/types';
import { Dispatch } from 'redux';

type OwnProps = {
    checkoutItem: IShopItemQuantity;
};

type StateProps = {};

type DispatchProps = {
    addItem: (item: IShopItemQuantity) => void;
    removeItem?: (item: IShopItemQuantity) => void;
    clearItem: (item: IShopItemQuantity) => void;
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
    addItem: (item: IShopItemQuantity) => dispatch(addItem(item)),
    removeItem: (item: IShopItemQuantity) => item.quantity > 1 ? dispatch(removeItem(item)) : undefined,
    clearItem: (item: IShopItemQuantity) => dispatch(clearItem(item)),
});

export default connect<StateProps, DispatchProps, OwnProps>(null, mapDispatchToProps)(CheckoutItem);
