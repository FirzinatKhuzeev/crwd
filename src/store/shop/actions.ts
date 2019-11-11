import {
    IShopState,
    ShopActionTypes,
    DATA_GATHERING_SUCCESS
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
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                },
                {
                    id: 2,
                    name: "Wolf Cap",
                    price: 14,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                },
                {
                    id: 3,
                    name: "Palm Tree Cap",
                    price: 14,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                },
                {
                    id: 4,
                    name: "Blue Beanie",
                    price: 18,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                }
            ]
        },
        {
            id: 2,
            category: "Jackets",
            title: "jackets",
            items: [
                {
                    id: 1,
                    name: "Brown Brim",
                    price: 25,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                },
                {
                    id: 2,
                    name: "Wolf Cap",
                    price: 14,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                },
                {
                    id: 3,
                    name: "Palm Tree Cap",
                    price: 14,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                },
                {
                    id: 4,
                    name: "Blue Beanie",
                    price: 18,
                    imageSrc: "",
                    color: [
                        "1"
                    ],
                    size: [
                        ""
                    ]
                }
            ]
        }
    ]
}

export default function getShopData(): ShopActionTypes {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: shopData
    }
}