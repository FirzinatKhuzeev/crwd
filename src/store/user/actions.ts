import {
    SIGN_IN_EMAIL,
    SIGN_IN_GOOGLE,
    SIGN_OUT,
    UserActions
} from "./types"
import { AuthState } from "../../components/sign-in";

export const signInEmail = (creds: AuthState): UserActions => {
    return {
        type: SIGN_IN_EMAIL,
        payload: creds
    };
};

export const signInGoogle = (): UserActions => {
    return {
        type: SIGN_IN_GOOGLE
    };
};

export const signOut = (): UserActions => {
    return {
        type: SIGN_OUT
    };
};