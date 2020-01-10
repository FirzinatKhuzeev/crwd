import React from 'react';
import { ShopPreviewContainer, TitleContainer, PreviewContainer } from './styles';
import ShopItem from '../shop-item';
import { IShopCollection } from '../../store/shop/types';
import { RouteComponentProps, withRouter } from 'react-router';

type Collection = Pick<IShopCollection, 'title' | 'category' | 'items'>;

type Props = Collection & RouteComponentProps;

const ShopPreview: React.FC<Props> = (props) => {
    return (
        <ShopPreviewContainer>
            <TitleContainer>{props.title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {props.items.map(item => (
                    <ShopItem key={item.id} {...item} title={props.title} />
                ))}
            </PreviewContainer>
        </ShopPreviewContainer>
    );
};

export default withRouter(ShopPreview);
