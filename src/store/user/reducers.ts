import { IUserState, UserActions, SIGN_IN_EMAIL, SIGN_IN_GOOGLE, SIGN_OUT } from "./types";

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
            return {
                ...state,
                isAuthenticated: true,
                uuid: 'test'
            }
        case SIGN_IN_GOOGLE:
            return {
                ...state
            };
        case SIGN_OUT:
            return {
                ...state
            };
        default:
            return state
    }
};