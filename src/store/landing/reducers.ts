import {
    DATA_GATHERING_SUCCESS,
    PhotoActions,
    PhotoState,
    DATA_GATHERING_FAILED,
    DATA_GATHERING_START
} from './types';

const initialState: PhotoState = {
    photos: [],
    isFetching: false
};

export default function photoReducer(state = initialState, action: PhotoActions): PhotoState {
    switch (action.type) {
        case DATA_GATHERING_START:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case DATA_GATHERING_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isFetching: action.isFetching
            };
        case DATA_GATHERING_FAILED:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            break;
    }

    return state;
}
