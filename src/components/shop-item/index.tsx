import React from 'react';
import { ShopItemContainer, DescriptionContainer, NameContainer, PriceContainer } from './styles';
import { IShopItem } from '../../store/shop/types';

type ShopItemProps = IShopItem;

class ShopItem extends React.Component<ShopItemProps, any> {
    constructor(props: ShopItemProps) {
        super(props);
    }

    render() {
        return (
            <ShopItemContainer>
                <img src={this.props.imageSrc} />
                <DescriptionContainer>
                    <NameContainer>{this.props.name}</NameContainer>
                    <PriceContainer>{this.props.price}</PriceContainer>
                </DescriptionContainer>
                <input type="button" value="Add to cart" />
            </ShopItemContainer>
        )
    }
}

export default ShopItem;