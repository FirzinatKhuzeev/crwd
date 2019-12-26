import { IShopState, ShopActionTypes, DATA_GATHERING_SUCCESS } from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { Action } from 'redux';

const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit consequuntur magnam tempore illo ea molestias fugit? Harum, natus repellat rem temporibus vitae aut. Sequi ad quisquam aut at illum.';

export const shopData: IShopState = {
    shopCollection: [
        {
            id: 11,
            category: 'hats',
            title: 'Hats',
            items: [
                {
                    id: 1,
                    name: 'Brown Brim',
                    price: 25,
                    imageSrc: 'https://i.imgur.com/woPUlum.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
                {
                    id: 2,
                    name: 'Wolf Cap',
                    price: 14,
                    imageSrc: 'https://i.imgur.com/8sQa8Jg.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
                {
                    id: 3,
                    name: 'Palm Tree Cap',
                    price: 14,
                    imageSrc: 'https://i.imgur.com/t0442IY.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
                {
                    id: 4,
                    name: 'Blue Beanie',
                    price: 18,
                    imageSrc: 'https://i.imgur.com/KeRw2S2.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
            ],
        },
        {
            id: 22,
            category: 'Jackets',
            title: 'jackets',
            items: [
                {
                    id: 1,
                    name: 'Brown Brim',
                    price: 25,
                    imageSrc: 'https://i.imgur.com/KeRw2S2.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
                {
                    id: 2,
                    name: 'Wolf Cap',
                    price: 14,
                    imageSrc: 'https://i.imgur.com/t0442IY.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
                {
                    id: 3,
                    name: 'Palm Tree Cap',
                    price: 14,
                    imageSrc: 'https://i.imgur.com/woPUlum.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
                {
                    id: 4,
                    name: 'Blue Beanie',
                    price: 18,
                    imageSrc: 'https://i.imgur.com/8sQa8Jg.png',
                    description: description,
                    size: ['xs', 's', 'm', 'l'],
                    color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                },
            ],
        },
    ],
};

export default function getShopData(): ShopActionTypes {
    return {
        type: DATA_GATHERING_SUCCESS,
        payload: shopData,
    };
}

export const fetchShopData = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => async dispatch => {
    dispatch({
        type: DATA_GATHERING_SUCCESS,
        payload: shopData,
    });
};
