import { IUserState, UserActions, SIGN_IN_EMAIL, SIGN_IN_GOOGLE, SIGN_OUT } from './types';
import { signInEmail, signOut, signInGoogle } from './utils';

const initialState: IUserState = {
    isAuthenticated: false,
    uuid: null,
};

export const userReducer = (state = initialState, action: UserActions): IUserState => {
    switch (action.type) {
        case SIGN_IN_EMAIL:
            return signInEmail(action.payload);
        case SIGN_IN_GOOGLE:
            return signInGoogle();
        case SIGN_OUT:
            return signOut();
        default:
            return state;
    }
};
