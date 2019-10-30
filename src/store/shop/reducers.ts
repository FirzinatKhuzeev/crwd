import {
    IShopState,
    ShopActionTypes,
    DATA_GATHERING_SUCCUSS
} from "./types";
import { shopData } from "./actions";

const initialState: IShopState = {
    shopCollection: []
}

export default function shopReducer(
    state = shopData,
    action: ShopActionTypes
): IShopState {
    console.log(action.type);
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