import { AuthState } from '../../components/sign-in';

export interface IUserState {
    isAuthenticated: boolean | null;
    uuid: string | null;
}

export const SIGN_IN_EMAIL = 'SIGN_IN_EMAIL';

export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE';

export const SIGN_OUT = 'SIGN_OUT';

export interface SignInEmailAction {
    type: typeof SIGN_IN_EMAIL;
    payload: AuthState;
}

export interface SignInGoogleAction {
    type: typeof SIGN_IN_GOOGLE;
}

export interface SignOut {
    type: typeof SIGN_OUT;
}

export type UserActions = SignInEmailAction | SignInGoogleAction | SignOut;
