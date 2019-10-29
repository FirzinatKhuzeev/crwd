import React from 'react';
import { ShopItemContainer, DescriptionContainer, NameContainer, PriceContainer } from './styles';
import { IShopItem } from '../../store/shop/types';

interface IProps { }

type ShopItemProps = IProps;

class ShopItem extends React.Component<ShopItemProps, IShopItem> {
    constructor(props: ShopItemProps) {
        super(props);
    }

    render() {
        return (
            <ShopItemContainer>
                <img src={this.state.imageSrc} />
                <DescriptionContainer>
                    <NameContainer>{this.state.name}</NameContainer>
                    <PriceContainer>{this.state.price}</PriceContainer>
                </DescriptionContainer>
                <input type="button" value="Add to cart" />
            </ShopItemContainer>
        )
    }
}

export default ShopItem;