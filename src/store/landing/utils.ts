import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IPhotoState, PhotoActions } from "./types";
import { Dispatch } from "redux";
import { getPhotosStart, getPhotosSuccess, getPhotosFailed } from "./actions";
import PhotosService from "../../api/photos-service";

export const getPhotos: ActionCreator<ThunkAction<
    Promise<any>,
    IPhotoState,
    null,
    PhotoActions
>> = () => {
    return (dispatch: Dispatch) => {
        dispatch(getPhotosStart());
        return PhotosService
            .getPhotos()
            .then(response => {
                dispatch(getPhotosSuccess(response.data));
            })
            .catch(error => {
                console.error(error);
                dispatch(getPhotosFailed());
            });
    };
};
