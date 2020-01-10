import { SIGN_IN_EMAIL, SIGN_IN_GOOGLE, SIGN_OUT, UserActions, UserCredential } from './types';

export const signInEmail = (creds: UserCredential): UserActions => {
    return {
        type: SIGN_IN_EMAIL,
        payload: creds,
    };
};

export const signInGoogle = (): UserActions => {
    return {
        type: SIGN_IN_GOOGLE,
    };
};

export const signOut = (): UserActions => {
    return {
        type: SIGN_OUT,
    };
};
