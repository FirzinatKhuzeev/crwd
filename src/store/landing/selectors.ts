import { AppState } from "..";
import { createSelector } from "reselect";

export const selectPhoto = (state: AppState) => state.photo;

export const selectIsFetching = createSelector(
    [selectPhoto],
    item => item.isFetching
);

export const selectPhotos = createSelector(
    [selectPhoto],
    item => item.photos
);