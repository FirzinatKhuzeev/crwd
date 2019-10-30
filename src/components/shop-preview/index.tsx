import React from 'react';
import { ShopPreviewContainer, TitleContainer, PreviewContainer } from './styles';
import ShopItem from '../shop-item';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IShopCollection } from '../../store/shop/types';
// todo
type IProps = Pick<IShopCollection, "title" | "category" | "items">

type ShopProps = IProps & RouteComponentProps;

class ShopPreview extends React.Component<ShopProps, any> {
    constructor(props: ShopProps) {
        super(props);
    }

    render() {
        return (
            <ShopPreviewContainer>
                <TitleContainer onClick={() => this.props.history.push(`${this.props.match.path}/${this.props.category}`)}>
                    {this.props.title.toUpperCase()}
                </TitleContainer>
                <PreviewContainer>
                    {this.props.items.map(item => (<ShopItem key={item.id} {...item} />))}
                </PreviewContainer>
            </ShopPreviewContainer>
        );
    }
}

export default withRouter(ShopPreview);

