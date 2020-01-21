import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    SignInContainer,
    SignInTitle,
    FormInput,
    SignInButton,
    FormContainer,
    AccountContainer,
    GoogleIcon,
    ButtonsContainter,
    CreateAccountLink,
    GoogleSignInButton
} from './styles';
import { signInEmail } from '../../store/user/actions';
import { Dispatch } from 'redux';
import { UserCredential } from '../../store/user/types';

type Props = {
    signInEmail: (cretential: UserCredential) => {};
};

const SignIn: React.FC<Props> = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SignInContainer>
            <SignInTitle>Sign In</SignInTitle>
            <FormContainer
                onSubmit={e => {
                    e.preventDefault();
                    props.signInEmail({ email, password });
                }}
            >
                <FormInput
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <FormInput
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <ButtonsContainter>
                    <GoogleSignInButton>
                        <GoogleIcon size="20" /> Sign in with Google
                    </GoogleSignInButton>
                    <SignInButton type="submit">Sign in</SignInButton>
                </ButtonsContainter>
                <AccountContainer>
                    <CreateAccountLink href="/"> Don’t have an account?</CreateAccountLink>
                </AccountContainer>
            </FormContainer>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signInEmail: (credential: UserCredential) => dispatch(signInEmail(credential))
});

export default connect(null, mapDispatchToProps)(SignIn);
