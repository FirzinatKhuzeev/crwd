import React from 'react';
import { ShopPreviewContainer, TitleContainer, PreviewContainer } from './styles';
import ShopItem from '../shop-item';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IShopCollection } from '../../store/shop/types';

interface IProps { }

type ShopProps = IProps & RouteComponentProps;

class ShopPreview extends React.Component<ShopProps, IShopCollection> {
    constructor(props: ShopProps) {
        super(props);
    }

    render() {
        return (
            <ShopPreviewContainer>
                <TitleContainer onClick={() => this.props.history.push(`${this.props.match.path}/${this.state.category}`)}>
                    {this.state.title.toUpperCase()}
                </TitleContainer>
                <PreviewContainer>
                    {this.state.items.map(item => (<ShopItem key={item.id} {...item} />))}
                </PreviewContainer>
            </ShopPreviewContainer>
        );
    }
}

export default withRouter(ShopPreview);

