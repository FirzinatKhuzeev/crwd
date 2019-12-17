import React from "react";
import { connect } from 'react-redux';
import { SignInContainer, SignInTitle } from "./styles";
import { signInEmail } from "../../store/user/actions";
import { Dispatch } from "redux";

export interface AuthState {
    email: string,
    password: string
}

export interface SignInProps {
    signInEmail: (cretential: AuthState) => {}
}

export type HandleOnChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>) => void;

class SignIn extends React.Component<SignInProps, AuthState> {
    state = {
        email: '',
        password: ''
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
                    <form onSubmit={this.handleSubmit}>
                        <input required name="email" type="email" placeholder="Email" />
                        <input required name="password" type="password" placeholder="Password" />
                        <div className="buttons">
                            <button>Sign in with Google</button>
                            <button type="submit">Sign in</button>
                        </div>
                        <div><a href="#"> Don't have an account?</a></div>
                    </form>
                </div>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signInEmail: (credential: AuthState) => dispatch(signInEmail(credential))
});

export default connect(null, mapDispatchToProps)(SignIn);