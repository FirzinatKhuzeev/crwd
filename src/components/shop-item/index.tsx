import React from 'react';
import {
    ShopItemContainer,
    DescriptionContainer,
    NameContainer,
    PriceContainer,
    ImageContainer,
    ItemLink
} from './styles';
import { ShopData } from '../../store/shop/types';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type ShopItemProps = {
    title: string;
};

type Props = ShopItemProps & ShopData & RouteComponentProps;

const ShopItem: React.FC<Props> = ({ title, id, imageSrc, name, price, match }) => (
    <ShopItemContainer>
        <ItemLink to={`${match.url}/${title.toLowerCase()}/${id}`}>
            <ImageContainer imageSrc={imageSrc} />
            <DescriptionContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}$</PriceContainer>
            </DescriptionContainer>
        </ItemLink>
    </ShopItemContainer>
);

export default withRouter(ShopItem);
