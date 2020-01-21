import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { PhotoState, PhotoActions } from './types';
import { Dispatch } from 'redux';
import { getPhotosStart, getPhotosSuccess, getPhotosFailed } from './actions';
import PhotosService from '../../api/photos-service';

export const getPhotos: ActionCreator<ThunkAction<
    Promise<any>,
    PhotoState,
    null,
    PhotoActions
>> = () => {
    return (dispatch: Dispatch) => {
        dispatch(getPhotosStart());
        const photoService = new PhotosService();
        console.log('Photo service');
        return photoService
            .getPhotos()
            .then(response => {
                dispatch(getPhotosSuccess(response));
            })
            .catch(error => {
                console.error(error);
                dispatch(getPhotosFailed());
            });
    };
};
