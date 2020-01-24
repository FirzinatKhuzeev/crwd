import {
    UserState,
    UserActions,
    SIGN_IN_EMAIL_START,
    SIGN_IN_GOOGLE,
    SIGN_OUT,
    SIGN_IN_EMAIL_SUCCEED
} from './types';

const initialState: UserState = {
    isAuthenticated: false,
    uuid: null
};

export const userReducer = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case SIGN_IN_EMAIL_START:
            return {
                ...state,
                isAuthenticated: false,
                uuid: null
            };
        case SIGN_IN_EMAIL_SUCCEED:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                uuid: action.payload.uuid
            };
        case SIGN_IN_GOOGLE:
            return {
                ...state
            };
        case SIGN_OUT:
            return { ...state, isAuthenticated: false, uuid: null };
        default:
            return state;
    }
};
