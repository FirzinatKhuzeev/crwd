import { IUserState, UserActions, SIGN_IN_EMAIL, SIGN_IN_GOOGLE, SIGN_OUT } from "./types";
import { signInEmail } from './utils'
import { signOut } from "./actions";

let initialState: IUserState = {
    isAuthenticated: false,
    uuid: null
}

export const userReducer = (
    state = initialState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case SIGN_IN_EMAIL:
            return signInEmail(action.payload);
        case SIGN_IN_GOOGLE:
            return {
                ...state
            };
        case SIGN_OUT:
            signOut();
            return {
                isAuthenticated: false,
                uuid: null
            }
        default:
            return state
    }
};