import React from 'react';
import { ItemCountContainer, BasketIconContainer, IconContainer } from './styles';
import { showCheckoutModal } from '../../store/checkout/actions';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface IBasketIconProps {
    showCheckoutModal: () => {};
    checkoutItemsCount: number;
}

const BasketIcon: React.FC<IBasketIconProps> = ({ showCheckoutModal, checkoutItemsCount }) => (
    <BasketIconContainer onClick={showCheckoutModal}>
        <IconContainer />
        <ItemCountContainer>{checkoutItemsCount}</ItemCountContainer>
    </BasketIconContainer>
);

const mapStateToProps = (state: AppState) => {
    return {
        checkoutItemsCount: state.checkout.checkoutItems.reduce(
            (acc, item) => acc + item.quantity,
            0
        ),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showCheckoutModal: () => dispatch(showCheckoutModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketIcon);
