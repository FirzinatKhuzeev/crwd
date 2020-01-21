import React from 'react';
import { ItemCountContainer, BasketIconContainer, IconContainer } from './styles';
import { showCheckoutModal } from '../../store/checkout/actions';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectCheckoutCount } from '../../store/checkout/selectors';

type Props = {
    showCheckoutModal: () => {};
    checkoutItemsCount: number;
};

const BasketIcon: React.FC<Props> = ({ showCheckoutModal, checkoutItemsCount }) => (
    <BasketIconContainer onClick={showCheckoutModal}>
        <IconContainer />
        <ItemCountContainer>{checkoutItemsCount}</ItemCountContainer>
    </BasketIconContainer>
);

const mapStateToProps = (state: AppState) => {
    return {
        checkoutItemsCount: selectCheckoutCount(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showCheckoutModal: () => dispatch(showCheckoutModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketIcon);
