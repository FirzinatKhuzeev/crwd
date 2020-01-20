import {
    IDataGatheringSuccessAction,
    DATA_GATHERING_SUCCESS,
    DATA_GATHERING_FAILED,
    IDataGatheringFailedAction,
    IDataGatheringStartAction,
    DATA_GATHERING_START,
    IPhoto,
} from './types';

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
