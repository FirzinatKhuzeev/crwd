import { IUserState } from "./types";

export const signInEmail = (creds: IUserState): void => {
    window.localStorage.setItem("authenticated", "true");
};

export const signInGoogle = (): void => {
    console.error("signInGoogle is not implemented");
};

export const signOut = (): void => {
    window.localStorage.setItem("authenticated", "false");
};