import React from 'react';
import { connect } from 'react-redux';
import {
    SignInContainer,
    SignInTitle,
    FormInput,
    SignInButton,
    FormContainer,
    AccountContainer,
} from './styles';
import { signInEmail } from '../../store/user/actions';
import { Dispatch } from 'redux';

export interface AuthState {
    email: string;
    password: string;
}

export interface SignInProps {
    signInEmail: (cretential: AuthState) => {};
}

export type HandleOnChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>) => void;

class SignIn extends React.Component<SignInProps, AuthState> {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.signInEmail({ email, password });
    };

    render() {
        return (
            <SignInContainer>
                <SignInTitle>Sign In</SignInTitle>
                <div>
                    <FormContainer onSubmit={this.handleSubmit}>
                        <FormInput required name="email" type="email" placeholder="Email" />
                        <FormInput
                            required
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <div className="buttons">
                            <SignInButton>Sign in with Google</SignInButton>
                            <SignInButton type="submit">Sign in</SignInButton>
                        </div>
                        <AccountContainer>
                            <a href="/"> Don't have an account?</a>
                        </AccountContainer>
                    </FormContainer>
                </div>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signInEmail: (credential: AuthState) => dispatch(signInEmail(credential)),
});

export default connect(null, mapDispatchToProps)(SignIn);
