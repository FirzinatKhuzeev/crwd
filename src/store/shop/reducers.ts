import {
    IShopState,
    ShopActionTypes,
    DATA_GATHERING_SUCCESS
} from "./types";

const initialState: IShopState = {
    shopCollection: []
}

export default function shopReducer(
    state = initialState,
    action: ShopActionTypes
): IShopState {
    console.log(action.type);
    switch (action.type) {
        case DATA_GATHERING_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            break;
    }

    return state;
}