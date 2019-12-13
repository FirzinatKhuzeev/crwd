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
    // state = {
    //     email: '',
    //     password: ''
    // };

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        // const { email, password } = this.state;
        // this.props.signInEmail({ email, password });
    };

    handleChange: HandleOnChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // const { name, value } = event.target;
        // const newState = {
        //     [name]: value
        // };
        // this.setState(newState as any);
    };

    render(): JSX.Element {
        return (
            <SignInContainer>
                <SignInTitle>Sign In</SignInTitle>
                <form onSubmit={this.handleSubmit}>
                    <input required name="email" type="email" onChange={this.handleChange} placeholder="Email" />
                    <input required name="password" type="password" onChange={this.handleChange} placeholder="Password" />
                    <div className="buttons">
                        <button>Sign in with Google</button>
                        <button type="submit">Sign in</button>
                    </div>
                    <div><a href="/"> Don't have an account?</a></div>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signInEmail: (credential: AuthState) => dispatch(signInEmail(credential))
});

export default connect(null, mapDispatchToProps)(SignIn);