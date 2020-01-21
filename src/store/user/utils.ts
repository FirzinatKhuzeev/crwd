import { UserState, UserCredential } from './types';

export const signInEmail = (creds: UserCredential): UserState => {
    const encodedData = window.btoa(`${creds.email}${creds.password}`);
    window.localStorage.setItem('token', encodedData);
    window.localStorage.setItem('authenticated', 'true');

    return { isAuthenticated: true, uuid: creds.email };
};

export const signInGoogle = (): UserState => {
    console.error('sign-in with google is not implemented.');

    return { isAuthenticated: false, uuid: null };
};

export const signOut = (): UserState => {
    window.localStorage.setItem('authenticated', 'false');
    window.localStorage.removeItem('token');

    return { isAuthenticated: false, uuid: null };
};
