export interface IPhoto {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface IPhotoState {
    photos: IPhoto[],
    isFetching: boolean,
}

export const DATA_GATHERING_SUCCESS = "DATA_GATHERING_SUCCESS";
export const DATA_GATHERING_FAILED = "DATA_GATHERING_FAILED";
export const DATA_GATHERING_START = "DATA_GATHERING_START";

export interface IDataGatheringSuccessAction {
    type: typeof DATA_GATHERING_SUCCESS,
    payload: IPhoto[],
    isFetching: false,
}

export interface IDataGatheringFailedAction {
    type: typeof DATA_GATHERING_FAILED,
    isFetching: false,
}

export interface IDataGatheringStartAction {
    type: typeof DATA_GATHERING_START,
    isFetching: true,
}

export type PhotoActions = IDataGatheringStartAction | IDataGatheringSuccessAction | IDataGatheringFailedAction;