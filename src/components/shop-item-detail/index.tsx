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
    ColorContainer,
    SizeButtonLabel,
    Item,
    SizeButton,
    ColorButton
} from './styles';
import { RouteComponentProps } from 'react-router-dom';
import { addItem } from '../../store/checkout/actions';
import { Dispatch } from 'redux';

interface IShopitemProps {
    shopItem: IShopItem | null | undefined,
    addItem: typeof addItem
}

type IProps = IShopitemProps & RouteComponentProps

class ShopItemDetail extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        let sizeElements = [];
        let colorElements = [];
        if (this.props.shopItem != null) {
            let siezes = this.props.shopItem.size;
            for (let i = 0; i < siezes.length; i++) {
                sizeElements.push(
                    <Item>
                        <SizeButton type="radio" name="radio" id={i.toString()} value={siezes[i]} />
                        <SizeButtonLabel key={i.toString()} htmlFor={i.toString()}>{siezes[i].toLocaleUpperCase()}</SizeButtonLabel>
                    </Item>
                );
            }
            let colors = this.props.shopItem.color;
            for (let i = 0; i < colors.length; i++) {
                colorElements.push(
                    <Item>
                        <ColorButton color={colors[i]} />
                    </Item>
                );
            }
        }
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
                        <span>Size:</span>{sizeElements}
                    </SizeContainer>
                    <ColorContainer>
                        <span>Color:</span>{colorElements}
                    </ColorContainer>
                    <CustomButtonContainer onClick={() => this.props.addItem(this.props.shopItem as IShopItem)}>Add To Cart {this.props.shopItem.price}$</CustomButtonContainer>
                </ItemDetailInfoBlock>
            </ItemDetailContainer>
        );
    }
}

export interface IOwnProps extends RouteComponentProps<{
    id: string
}> { }

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => {
    const values = state.shop.shopCollection.map(x => x.items.find(y => y.id === +ownProps.match.params.id)).filter(i => i)
    return ({
        shopItem: (values.length && values[0]) || null
    })
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: IShopItem) => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemDetail);
