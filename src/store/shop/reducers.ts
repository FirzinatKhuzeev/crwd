import { IShopState, ShopActionTypes, DATA_GATHERING_SUCCESS, DATA_GATHERING_FAILED, DATA_GATHERING_START } from './types';

const initialState: IShopState = {
    shopCollection: [],
    isFetching: false
};

export default function shopReducer(state = initialState, action: ShopActionTypes): IShopState {
    console.log(action.type);
    switch (action.type) {
        case DATA_GATHERING_START:
            return {
                ...state,
                isFetching: true
            }
        case DATA_GATHERING_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isFetching: false
            };
        case DATA_GATHERING_FAILED:
            return {
                ...state,
                isFetching: false
            };
        default:
            break;
    }

    return state;
}
