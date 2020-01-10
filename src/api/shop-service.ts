import { IShopState } from "../store/shop/types";

export default class ShopService {
    public static description =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit consequuntur magnam tempore illo ea molestias fugit? Harum, natus repellat rem temporibus vitae aut. Sequi ad quisquam aut at illum.';

    public static shopData: IShopState =
        {
            shopCollection:
                [
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
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                            {
                                id: 2,
                                name: 'Wolf Cap',
                                price: 14,
                                imageSrc: 'https://i.imgur.com/8sQa8Jg.png',
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                            {
                                id: 3,
                                name: 'Palm Tree Cap',
                                price: 14,
                                imageSrc: 'https://i.imgur.com/t0442IY.png',
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                            {
                                id: 4,
                                name: 'Blue Beanie',
                                price: 18,
                                imageSrc: 'https://i.imgur.com/KeRw2S2.png',
                                description: ShopService.description,
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
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                            {
                                id: 2,
                                name: 'Wolf Cap',
                                price: 14,
                                imageSrc: 'https://i.imgur.com/t0442IY.png',
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                            {
                                id: 3,
                                name: 'Palm Tree Cap',
                                price: 14,
                                imageSrc: 'https://i.imgur.com/woPUlum.png',
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                            {
                                id: 4,
                                name: 'Blue Beanie',
                                price: 18,
                                imageSrc: 'https://i.imgur.com/8sQa8Jg.png',
                                description: ShopService.description,
                                size: ['xs', 's', 'm', 'l'],
                                color: ['#5e3927', '#d3c5bd', '#965a3e', '#af6e4d'],
                            },
                        ],
                    },
                ],
            isFetching: false
        };

    public static getShopData(): Promise<any> {
        return new Promise((resolve) => {
            resolve(ShopService.shopData);
        });
    }
}