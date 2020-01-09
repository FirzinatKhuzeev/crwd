import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
    IPhotoState,
    PhotoActions,
    IDataGatheringSuccessAction,
    DATA_GATHERING_SUCCESS,
    DATA_GATHERING_FAILED,
    IDataGatheringFailedAction,
    IDataGatheringStartAction,
    DATA_GATHERING_START,
    IPhoto,
} from './types';
import PhotosService from '../../api/photos-service';

export const getPhotosStart = (): IDataGatheringStartAction => {
    return {
        type: DATA_GATHERING_START,
        isFetching: true,
    };
};

export const getPhotosSuccess = (data: IPhoto[]): IDataGatheringSuccessAction => {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: data,
        isFetching: false,
    };
};

export const getPhotosFailed = (): IDataGatheringFailedAction => {
    return {
        type: DATA_GATHERING_FAILED,
        isFetching: false,
    };
};

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
