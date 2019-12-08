import React from "react";
import { connect } from "react-redux";
import {
    CheckoutPageContainer,
    TotalContainer
} from "./styles";
import { IShopItemQuantity } from "../../store/checkout/types";
import { AppState } from "../../store";
import CheckoutItem from "../checkout-item";

interface ICheckoutProps {
    checkoutItems: IShopItemQuantity[],
    total: number;
}

const Checkout: React.FC<ICheckoutProps> = ({ checkoutItems, total }) => (
    <CheckoutPageContainer>
        {checkoutItems.map((item: IShopItemQuantity) => (
            <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
        {total > 0
            ? (<TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>)
            : "Your basket is empty"
        }
    </CheckoutPageContainer>
);

const mapStateToProps = (state: AppState) => {
    return ({
        checkoutItems: state.checkout.checkoutItems,
        total: state.checkout.checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    })
};

export default connect(mapStateToProps)(Checkout);
