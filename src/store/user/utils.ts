import { UserState } from './types';

export const signInGoogle = (): UserState => {
    console.error('sign-in with google is not implemented.');

    return { isAuthenticated: false, uuid: null };
};
