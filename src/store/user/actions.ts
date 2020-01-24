import {
    SIGN_IN_EMAIL_START,
    SIGN_IN_GOOGLE,
    SIGN_OUT,
    UserActions,
    UserCredential,
    SIGN_OUT_START,
    SIGN_IN_EMAIL_SUCCEED,
    UserState
} from './types';

export const signInEmailStart = (creds: UserCredential): UserActions => {
    return {
        type: SIGN_IN_EMAIL_START,
        payload: creds
    };
};

export const signInEmailSucceed = (data: UserState): UserActions => {
    return {
        type: SIGN_IN_EMAIL_SUCCEED,
        payload: data
    };
};

export const signInGoogle = (): UserActions => {
    return {
        type: SIGN_IN_GOOGLE
    };
};

export const signOutStart = (): UserActions => {
    return {
        type: SIGN_OUT_START
    };
};

export const signOutSucceed = (): UserActions => {
    return {
        type: SIGN_OUT
    };
};
