import React from 'react';
import { ShopItemContainer, DescriptionContainer, NameContainer, PriceContainer, ImageContainer, ItemLink } from './styles';
import { IShopItem } from '../../store/shop/types';
import { match, RouteComponentProps, withRouter } from 'react-router-dom';

interface IShopItemProps {
    title: string;
}

type ShopItemProps = IShopItemProps & IShopItem & RouteComponentProps;

class ShopItem extends React.Component<ShopItemProps, any> {
    constructor(props: ShopItemProps) {
        super(props);
    }

    render() {
        return (
            <ShopItemContainer>
                <ItemLink
                    to={
                        this.props.title
                            ? `${this.props.match.url}/${this.props.title.toLowerCase()}/${this.props.id}`
                            : `${this.props.match.url}/${this.props.id}`
                    }>
                    <ImageContainer imageSrc={this.props.imageSrc} />
                    <DescriptionContainer>
                        <NameContainer>{this.props.name}</NameContainer>
                        <PriceContainer>{this.props.price}$</PriceContainer>
                    </DescriptionContainer>
                </ItemLink>
            </ShopItemContainer>
        )
    }
}

export default withRouter(ShopItem);