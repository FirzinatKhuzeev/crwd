import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { IShopItem } from '../../store/shop/types';
import {
    ItemDetailContainer,
    ItemDetailImageContainer,
    ItemDetailImage,
    ItemDetailInfoBlock,
    ItemDetailDescription,
    CustomButtonContainer,
    SizeContainer,
    ColorContainer
} from './styles';
import { RouteComponentProps } from 'react-router-dom';

interface IShopitemProps {
    shopItem: IShopItem
}

type IProps = IShopitemProps & RouteComponentProps

class ShopItemDetail extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <ItemDetailContainer>
                <ItemDetailImageContainer>
                    <ItemDetailImage imageSrc={this.props.shopItem.imageSrc} />
                </ItemDetailImageContainer>
                <ItemDetailInfoBlock>
                    <h1>{this.props.shopItem.name}</h1>
                    <ItemDetailDescription>
                        {this.props.shopItem.description}
                    </ItemDetailDescription>
                    <SizeContainer>
                        <span>Size: {this.props.shopItem.size}</span>
                    </SizeContainer>
                    <ColorContainer>
                        <span>Color: {this.props.shopItem.color}</span>
                    </ColorContainer>
                    <CustomButtonContainer>Add To Cart {this.props.shopItem.price}$</CustomButtonContainer>
                </ItemDetailInfoBlock>
            </ItemDetailContainer>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: RouteComponentProps) => ({
    shopItem: state.shop.shopCollection[0].items[0] // todo
});

export default connect(mapStateToProps)(ShopItemDetail);
