import { IUserState } from "./types";
import { AuthState } from "../../components/sign-in";

export const signInEmail = (creds: AuthState): IUserState => {
    const encodedData = window.btoa(`${creds.email}${creds.password}`);
    window.localStorage.setItem("token", encodedData);
    window.localStorage.setItem("authenticated", "true");

    return { isAuthenticated: true, uuid: creds.email };
};

export const signInGoogle = (): void => {
    console.error("sign-in with google is not implemented.");
};

export const signOut = (): void => {
    window.localStorage.setItem("authenticated", "false");
    window.localStorage.removeItem("token");
};