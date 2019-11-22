import {
    IShopState,
    ShopActionTypes,
    DATA_GATHERING_SUCCESS
} from "./types"
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { Action } from "redux";

let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit consequuntur magnam tempore illo ea molestias fugit? Harum, natus repellat rem temporibus vitae aut. Sequi ad quisquam aut at illum.';

export const shopData: IShopState = {
    shopCollection: [
        {
            id: 11,
            category: "hats",
            title: "Hats",
            items: [
                {
                    id: 1,
                    name: "Brown Brim",
                    price: 25,
                    imageSrc: "https://i.imgur.com/woPUlum.png",
                    description: description,
                    size: [],
                    color: []
                },
                {
                    id: 2,
                    name: "Wolf Cap",
                    price: 14,
                    imageSrc: "https://i.imgur.com/8sQa8Jg.png",
                    description: description,
                    size: [],
                    color: []
                },
                {
                    id: 3,
                    name: "Palm Tree Cap",
                    price: 14,
                    imageSrc: "https://i.imgur.com/t0442IY.png",
                    description: description,
                    size: [],
                    color: []
                },
                {
                    id: 4,
                    name: "Blue Beanie",
                    price: 18,
                    imageSrc: "https://i.imgur.com/KeRw2S2.png",
                    description: description,
                    size: [],
                    color: []
                }
            ]
        },
        {
            id: 22,
            category: "Jackets",
            title: "jackets",
            items: [
                {
                    id: 1,
                    name: "Brown Brim",
                    price: 25,
                    imageSrc: "https://i.imgur.com/KeRw2S2.png",
                    description: description,
                    size: [],
                    color: []
                },
                {
                    id: 2,
                    name: "Wolf Cap",
                    price: 14,
                    imageSrc: "https://i.imgur.com/t0442IY.png",
                    description: description,
                    size: [],
                    color: []
                },
                {
                    id: 3,
                    name: "Palm Tree Cap",
                    price: 14,
                    imageSrc: "https://i.imgur.com/woPUlum.png",
                    description: description,
                    size: [],
                    color: []
                },
                {
                    id: 4,
                    name: "Blue Beanie",
                    price: 18,
                    imageSrc: "https://i.imgur.com/8sQa8Jg.png",
                    description: description,
                    size: [],
                    color: []
                }
            ]
        }
    ]
}

export default function get1sShopData1(): ShopActionTypes {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: shopData
    }
}

export const getShopData = (
    message: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    const asyncResp = await exampleAPI();
    dispatch({
        type: DATA_GATHERING_SUCCESS,
        payload: shopData
    });
}

function exampleAPI() {
    return Promise.resolve('Async Chat Bot')
}