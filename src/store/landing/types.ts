export const DATA_GATHERING_SUCCESS = 'DATA_GATHERING_SUCCESS';
export const DATA_GATHERING_FAILED = 'DATA_GATHERING_FAILED';
export const DATA_GATHERING_START = 'DATA_GATHERING_START';

export interface Url {
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

export interface Photo {
    id: string;
    alt: string;
    width: number;
    height: number;
    urls: Url;
}

export interface PhotoState {
    photos: Photo[];
    isFetching: boolean;
}

export interface DataGatheringSuccessAction {
    type: typeof DATA_GATHERING_SUCCESS;
    payload: Photo[];
    isFetching: false;
}

export interface DataGatheringFailedAction {
    type: typeof DATA_GATHERING_FAILED;
    isFetching: false;
}

export interface DataGatheringStartAction {
    type: typeof DATA_GATHERING_START;
    isFetching: true;
}

export type PhotoActions =
    | DataGatheringStartAction
    | DataGatheringSuccessAction
    | DataGatheringFailedAction;
