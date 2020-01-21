import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { EmptyMessage, CheckoutModalContainer, CheckoutItems, CheckoutModalButton } from './styles';

import { showCheckoutModal } from '../../store/checkout/actions';
import { AppState } from '../../store';
import { ShopItemQuantity } from '../../store/checkout/types';
import { Dispatch } from 'redux';
import BasketItem from '../basket-item';
import { selectCheckoutItems } from '../../store/checkout/selectors';

type CheckoutModalState = {
    checkoutItems?: ShopItemQuantity[];
    dispatch?: Dispatch;
};

type Props = RouteComponentProps & CheckoutModalState;

const CheckoutModal: React.FC<Props> = ({ checkoutItems, history, dispatch }) => (
    <CheckoutModalContainer>
        <CheckoutItems>
            {checkoutItems!.length ? (
                checkoutItems!.map((item: ShopItemQuantity) => (
                    <BasketItem key={item.id} checkoutItem={item} />
                ))
            ) : (
                <EmptyMessage>Your basket is empty</EmptyMessage>
            )}
        </CheckoutItems>
        <CheckoutModalButton
            onClick={() => {
                history.push('/checkout');
                dispatch && dispatch(showCheckoutModal());
            }}
        >
            CHECKOUT
        </CheckoutModalButton>
    </CheckoutModalContainer>
);

const mapStateToProps = (state: AppState) => {
    return {
        checkoutItems: selectCheckoutItems(state)
    };
};

export default withRouter(connect(mapStateToProps)(CheckoutModal));
