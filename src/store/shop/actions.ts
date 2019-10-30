import {
    IShopState,
    ShopActionTypes,
    DATA_GATHERING_SUCCUSS
} from "./types"
import { Dispatch } from "redux";

export const shopData: IShopState = {
    shopCollection: [
        {
            id: 1,
            category: "hats",
            title: "Hats",
            items: [
                {
                    id: 1,
                    name: "Brown Brim",
                    price: 25,
                    imageSrc: ""
                },
                {
                    id: 2,
                    name: "Wolf Cap",
                    price: 14,
                    imageSrc: ""
                },
                {
                    id: 3,
                    name: "Palm Tree Cap",
                    price: 14,
                    imageSrc: ""
                },
                {
                    id: 4,
                    name: "Blue Beanie",
                    price: 18,
                    imageSrc: ""
                }
            ]
        },
        {
            id: 1,
            category: "Jackets",
            title: "jackets",
            items: [
                {
                    id: 1,
                    name: "Brown Brim",
                    price: 25,
                    imageSrc: ""
                },
                {
                    id: 2,
                    name: "Wolf Cap",
                    price: 14,
                    imageSrc: ""
                },
                {
                    id: 3,
                    name: "Palm Tree Cap",
                    price: 14,
                    imageSrc: ""
                },
                {
                    id: 4,
                    name: "Blue Beanie",
                    price: 18,
                    imageSrc: ""
                }
            ]
        }
    ]
}

export default function getShopData(): ShopActionTypes {
    return {
        type: DATA_GATHERING_SUCCUSS,
        payload: shopData
    }
}