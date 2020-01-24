export const SIGN_IN_EMAIL_START = 'SIGN_IN_EMAIL_START';
export const SIGN_IN_EMAIL_SUCCEED = 'SIGN_IN_EMAIL_SUCCEED';
export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_OUT_START = 'SIGN_OUT_START';

export interface UserState {
    isAuthenticated: boolean | null;
    uuid: string | null;
}

export type UserCredential = {
    email: string;
    password: string;
};

export interface SignInEmailStartAction {
    type: typeof SIGN_IN_EMAIL_START;
    payload: UserCredential;
}

export interface SignInEmailSucceedAction {
    type: typeof SIGN_IN_EMAIL_SUCCEED;
    payload: UserState;
}

export interface SignInGoogleAction {
    type: typeof SIGN_IN_GOOGLE;
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
}

export interface SignOutStartAction {
    type: typeof SIGN_OUT_START;
}

export type UserActions =
    | SignInEmailStartAction
    | SignInEmailSucceedAction
    | SignInGoogleAction
    | SignOutAction
    | SignOutStartAction;
