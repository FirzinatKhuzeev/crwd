import { createSelector } from 'reselect';
import { AppState } from '..';
import { UserState } from './types';

export const selectUser = (state: AppState): UserState => state.user;

export const selectUserIsAuthenticated = createSelector([selectUser], user => user.isAuthenticated);
