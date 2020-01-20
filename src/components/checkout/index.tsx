import React from 'react';
import { connect } from 'react-redux';
import {
    CheckoutPageContainer,
    TotalContainer,
    PayButton,
    TotalLabel,
    CardIcon
} from './styles';
import { IShopItemQuantity } from '../../store/checkout/types';
import CheckoutItem from '../checkout-item';
import { selectCheckoutTotal, selectCheckoutItems } from '../../store/checkout/selectors';
import { AppState } from '../../store';

type Props = {
    checkoutItems: IShopItemQuantity[];
    total: number;
}

const Checkout: React.FC<Props> = ({ checkoutItems, total }) => (
    <CheckoutPageContainer>
        {checkoutItems.map((item: IShopItemQuantity) => (
            <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
        {total > 0 ? (
            <TotalContainer>
                <TotalLabel>Total: ${total}</TotalLabel>
                <PayButton><CardIcon size="24" />Pay</PayButton>
            </TotalContainer>
        ) : (
                'Your basket is empty'
            )}
    </CheckoutPageContainer>
);

const mapStateToProps = (state: AppState) => ({
    checkoutItems: selectCheckoutItems(state),
    total: selectCheckoutTotal(state)
});

export default connect(mapStateToProps)(Checkout);
