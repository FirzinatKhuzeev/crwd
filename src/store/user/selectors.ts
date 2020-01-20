import { createSelector } from 'reselect';
import { AppState } from '..';

export const selectUser = (state: AppState) => state.user;

export const selectUserIsAuthenticated = createSelector(
    [selectUser],
    user => user.isAuthenticated
);