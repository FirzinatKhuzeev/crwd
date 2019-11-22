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
    shopItem: IShopItem | null
}

type IProps = IShopitemProps & RouteComponentProps

class ShopItemDetail extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return this.props.shopItem && (
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

export interface IOwnProps extends RouteComponentProps<{
    id: string
}> { }

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => {
    // TODO: try to use reselect here
    const values = state.shop.shopCollection.map(x => x.items.find(y => y.id === +ownProps.match.params.id)).filter(i => i)
    return ({
        shopItem: (values.length && values[0]) || null
    })
};

export default connect(mapStateToProps)(ShopItemDetail);
