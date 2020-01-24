import React from 'react';
import { HeaderBlock, Navbar, Logo, Ul, Li, NavigationLink } from './styles';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import CheckoutModal from '../checkout-modal';
import BasketIcon from '../basket-icon';
import { signOutStart } from '../../store/user/actions';
import { Dispatch } from 'redux';
import { selectUserIsAuthenticated } from '../../store/user/selectors';
import { selectShowModal } from '../../store/checkout/selectors';

type OwnProps = {};

type HeaderState = {
    showModal: boolean;
    isAuthenticated: boolean | null;
};

type DispatchProps = {
    signOut: () => void;
};

type Props = OwnProps & HeaderState & DispatchProps;

const Header: React.FC<Props> = ({ showModal, isAuthenticated, signOut }) => {
    return (
        <HeaderBlock>
            <Navbar>
                <Logo to="/" />
                <Ul>
                    <Li>
                        <NavigationLink to="/shop">Shop</NavigationLink>
                    </Li>
                    <Li>
                        <NavigationLink to="/contact">Contact</NavigationLink>
                    </Li>
                    <Li>
                        {isAuthenticated ? (
                            <NavigationLink to="/signin" onClick={signOut}>
                                Sign out
                            </NavigationLink>
                        ) : (
                            <NavigationLink to="/signin">Sign in</NavigationLink>
                        )}
                    </Li>
                    <Li>
                        <BasketIcon />
                        {showModal ? <CheckoutModal /> : null}
                    </Li>
                </Ul>
            </Navbar>
        </HeaderBlock>
    );
};

const mapStateToProps = (state: AppState) => ({
    showModal: selectShowModal(state),
    isAuthenticated: selectUserIsAuthenticated(state)
});

const mapDispatchToProps = (dipatch: Dispatch) => ({
    signOut: () => dipatch(signOutStart())
});

export default connect<HeaderState, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Header);
