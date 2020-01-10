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
    AddToCardButton,
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
    shopItem?: IShopItem | null | undefined;
    addItem: typeof addItem;
}

type IProps = IShopitemProps & RouteComponentProps;

const ShopItemDetail: React.FC<IProps> = (props: IProps): JSX.Element => {

    const sizeElements = [];
    const colorElements = [];
    if (props.shopItem != null) {
        const siezes = props.shopItem.size;
        for (let i = 0; i < siezes.length; i++) {
            sizeElements.push(
                <Item key={i}>
                    <SizeButton type="radio" name="radio" id={i.toString()} value={siezes[i]} />
                    <SizeButtonLabel key={i.toString()} htmlFor={i.toString()}>
                        {siezes[i]}
                    </SizeButtonLabel>
                </Item>
            );
        }
        const colors = props.shopItem.color;
        for (let i = 0; i < colors.length; i++) {
            colorElements.push(
                <Item key={i}>
                    <ColorButton color={colors[i]} />
                </Item>
            );
        }
    }

    return (props.shopItem ?
        <ItemDetailContainer>
            <ItemDetailImageContainer>
                <ItemDetailImage imageSrc={props.shopItem!.imageSrc} />
            </ItemDetailImageContainer>
            <ItemDetailInfoBlock>
                <h1>{props.shopItem!.name}</h1>
                <ItemDetailDescription>
                    {props.shopItem!.description}
                </ItemDetailDescription>
                <SizeContainer>
                    <span>Size:</span>
                    {sizeElements}
                </SizeContainer>
                <ColorContainer>
                    <span>Color:</span>
                    {colorElements}
                </ColorContainer>
                <AddToCardButton
                    onClick={() => props.addItem(props.shopItem as IShopItem)}>
                    Add To Cart <strong>${props.shopItem!.price}</strong>
                </AddToCardButton>
            </ItemDetailInfoBlock>
        </ItemDetailContainer>
        : <div />
    );
}

export type IOwnProps = RouteComponentProps<{
    id: string;
}>;

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => {
    const values = state.shop.shopCollection
        .map(x => x.items.find(y => y.id === +ownProps.match.params.id))
        .filter(i => i);
    return {
        shopItem: (values.length && values[0]) || null,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: IShopItem) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemDetail);
