import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderBlock, Navbar, Logo, Ul, Li } from './styles';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import CheckoutModal from '../checkout-modal';
import BasketIcon from "../basket-icon";

interface IHeaderProps {
    showModal: boolean;
}

const Header: React.FC<IHeaderProps> = ({ showModal }) => {
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
                        <NavLink to="/signin">Sign in</NavLink>
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

const mapStateToProps = (state: AppState) => {
    return ({
        showModal: state.checkout.showModal
    })
};

export default connect(mapStateToProps, null)(Header);
