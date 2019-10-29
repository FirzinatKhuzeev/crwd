import {
    IShopState,
    ShopActionTypes,
    DATA_GATHERING_SUCCUSS
} from "./types";

const initialState: IShopState = {
    shopCollection: []
}

export function shopReducer(
    state = initialState,
    action: ShopActionTypes
): IShopState {
    switch (action.type) {
        case DATA_GATHERING_SUCCUSS:
            return {
                ...state,
                ...action.payload
            }
        default:
            break;
    }

    return state;
}