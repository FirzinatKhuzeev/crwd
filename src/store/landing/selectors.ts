import { AppState } from '..';
import { createSelector } from 'reselect';
import { PhotoState } from './types';

export const selectPhoto = (state: AppState): PhotoState => state.photo;

export const selectIsFetching = createSelector([selectPhoto], item => item.isFetching);

export const selectPhotos = createSelector([selectPhoto], item => item.photos);
