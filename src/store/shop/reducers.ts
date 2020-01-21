import {
    ShopState,
    ShopActionTypes,
    SHOP_DATA_GATHERING_SUCCESS,
    SHOP_DATA_GATHERING_FAILED,
    SHOP_DATA_GATHERING_START
} from './types';

const initialState: ShopState = {
    shopCollection: [],
    isFetching: false
};

export default function shopReducer(state = initialState, action: ShopActionTypes): ShopState {
    switch (action.type) {
        case SHOP_DATA_GATHERING_START:
            return {
                ...state,
                isFetching: true
            };
        case SHOP_DATA_GATHERING_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isFetching: false
            };
        case SHOP_DATA_GATHERING_FAILED:
            return {
                ...state,
                isFetching: false
            };
        default:
            break;
    }

    return state;
}
