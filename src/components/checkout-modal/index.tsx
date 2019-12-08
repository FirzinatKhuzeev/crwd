import React from "react"
import { connect } from "react-redux"
import { withRouter, RouteComponentProps } from "react-router-dom"

import {
    EmptyMessage,
    CheckoutModalContainer,
    CheckoutItems,
    CheckoutModalButton
} from './styles'

import { showCheckoutModal } from "../../store/checkout/actions";
import { AppState } from "../../store";
import { IShopItemQuantity } from "../../store/checkout/types";
import { Dispatch } from "redux";
import BasketItem from "../basket-item";

interface ICheckoutModal {
    checkoutItems: IShopItemQuantity[],
    dispatch: Dispatch
}

type IcheckoutModalProps = RouteComponentProps & ICheckoutModal;

const CheckoutModal: React.FC<IcheckoutModalProps> = ({
    checkoutItems,
    history,
    dispatch
}) =>
    (
        <CheckoutModalContainer>
            <CheckoutItems>
                {
                    checkoutItems.length
                        ? (checkoutItems.map((item: IShopItemQuantity) => <BasketItem key={item.id} checkoutItem={item} />))
                        : (<EmptyMessage>Your basket is empty</EmptyMessage>)
                }
            </CheckoutItems>
            <CheckoutModalButton onClick={() => { history.push("/checkout"); dispatch(showCheckoutModal()); }} >
                CHECKOUT
            </CheckoutModalButton>
        </CheckoutModalContainer>
    );

const mapStateToProps = (state: AppState) => {
    return ({
        checkoutItems: state.checkout.checkoutItems
    })
};

export default withRouter(connect(
    mapStateToProps,
    null
)(CheckoutModal as any));