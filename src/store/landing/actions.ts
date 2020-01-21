import {
    DataGatheringSuccessAction,
    DATA_GATHERING_SUCCESS,
    DATA_GATHERING_FAILED,
    DataGatheringFailedAction,
    DataGatheringStartAction,
    DATA_GATHERING_START
} from './types';

export const getPhotosStart = (): DataGatheringStartAction => {
    return {
        type: DATA_GATHERING_START,
        isFetching: true
    };
};

export const getPhotosSuccess = (data: any): DataGatheringSuccessAction => {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: data,
        isFetching: false
    };
};

export const getPhotosFailed = (): DataGatheringFailedAction => {
    return {
        type: DATA_GATHERING_FAILED,
        isFetching: false
    };
};
