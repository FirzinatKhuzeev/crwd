import React from 'react';
import { ShopPreviewContainer, TitleContainer, PreviewContainer } from './styles';
import ShopItem from '../shop-item';
import { IShopCollection } from '../../store/shop/types';

type IProps = Pick<IShopCollection, "title" | "category" | "items">

type ShopProps = IProps;

class ShopPreview extends React.Component<ShopProps, any> {
    constructor(props: ShopProps) {
        super(props);
    }

    render() {
        return (
            <ShopPreviewContainer>
                <TitleContainer>
                    {this.props.title.toUpperCase()}
                </TitleContainer>
                <PreviewContainer>
                    {this.props.items.map(item => (
                        <ShopItem key={item.id} {...item} title={this.props.title} />
                    ))}
                </PreviewContainer>
            </ShopPreviewContainer>
        );
    }
}

export default ShopPreview;

