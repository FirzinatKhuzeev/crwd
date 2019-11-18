import React from 'react';
import { ShopPreviewContainer, TitleContainer, PreviewContainer } from './styles';
import ShopItem from '../shop-item';
import { IShopCollection } from '../../store/shop/types';
import { RouteComponentProps, Route, withRouter } from 'react-router';
import ShopItemDetail from '../shop-item-detail';

type IProps = Pick<IShopCollection, "title" | "category" | "items">

type ShopProps = IProps & RouteComponentProps;

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
                    <Route
                        exact
                        path={`${this.props.match.url}/${this.props.title.toLowerCase()}/:id`}
                        component={ShopItemDetail}
                    />
                    {this.props.items.map(item => (
                        <ShopItem key={item.id} {...item} title={this.props.title} />
                    ))}
                </PreviewContainer>
            </ShopPreviewContainer>
        );
    }
}

export default withRouter(ShopPreview);

