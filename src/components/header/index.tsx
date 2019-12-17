import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderBlock, Navbar, Logo, Ul, Li } from './styles';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import CheckoutModal from '../checkout-modal';
import BasketIcon from "../basket-icon";
import { signOut } from '../../store/user/actions';
import { Dispatch } from 'redux';

type OwnProps = {
}

type HeaderState = {
    showModal: boolean;
    isAuthenticated: boolean | null;
}

type DispatchProps = {
    signOut: () => void;
}

type Props = OwnProps & HeaderState & DispatchProps;

const Header: React.FC<Props> = ({ showModal, isAuthenticated, signOut }) => {
    return (
        <HeaderBlock>
            <Navbar>
                <Logo to="/" />
                <Ul>
                    <Li>
                        <NavLink to="/shop">Shop</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact">Contact</NavLink>
                    </Li>
                    <Li>
                        {isAuthenticated
                            ? <NavLink to="/signin" onClick={signOut}>Sign out</NavLink>
                            : <NavLink to="/signin">Sign in</NavLink>}
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

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    showModal: state.checkout.showModal,
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = (dipatch: Dispatch) => ({
    signOut: () => dipatch(signOut())
});

export default connect<HeaderState, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(Header);
