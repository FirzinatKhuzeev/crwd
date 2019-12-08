import React from 'react';
import { ShopItemContainer, DescriptionContainer, NameContainer, PriceContainer, ImageContainer, ItemLink } from './styles';
import { IShopItem } from '../../store/shop/types';
import { RouteComponentProps, withRouter } from 'react-router-dom';

/// TODO: replace interface with type
type IShopItemProps = {
    title: string;
}

type ShopItemProps = IShopItemProps & IShopItem & RouteComponentProps;

const ShopItem: React.FC<ShopItemProps> = ({
    title,
    id,
    imageSrc,
    name,
    price,
    match
}) => (
        <ShopItemContainer>
            <ItemLink
                to={`${match.url}/${title.toLowerCase()}/${id}`}>
                <ImageContainer imageSrc={imageSrc} />
                <DescriptionContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>{price}$</PriceContainer>
                </DescriptionContainer>
            </ItemLink>
        </ShopItemContainer>
    );

export default withRouter(ShopItem);