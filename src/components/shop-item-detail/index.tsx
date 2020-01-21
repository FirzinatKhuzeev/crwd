import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { ShopData } from '../../store/shop/types';
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
import { selectShopItem } from '../../store/shop/selectors';
import { Dispatch } from 'redux';

type StateProps = {
    shopItem: ShopData;
};

type DispatchProps = {
    addItem: (item: ShopData) => void;
};

type OwnProps = RouteComponentProps<{
    id: string;
}>;

type Props = OwnProps & StateProps & DispatchProps & RouteComponentProps;

const ShopItemDetail: React.FC<Props> = (props: Props) => {
    if (props.shopItem !== null) {
        const sizeElements = props.shopItem.size.map(value => {
            return (
                <Item key={value}>
                    <SizeButton type="radio" name="radio" id={value.toString()} value={value} />
                    <SizeButtonLabel key={value.toString()} htmlFor={value.toString()}>
                        {value}
                    </SizeButtonLabel>
                </Item>
            );
        });

        const colorElements = props.shopItem!.color.map(value => {
            return (
                <Item key={value}>
                    <ColorButton color={value} />
                </Item>
            );
        });
        return (
            <ItemDetailContainer>
                <ItemDetailImageContainer>
                    <ItemDetailImage imageSrc={props.shopItem.imageSrc} />
                </ItemDetailImageContainer>
                <ItemDetailInfoBlock>
                    <h1>{props.shopItem!.name}</h1>
                    <ItemDetailDescription>{props.shopItem!.description}</ItemDetailDescription>
                    <SizeContainer>
                        <span>Size:</span>
                        {sizeElements}
                    </SizeContainer>
                    <ColorContainer>
                        <span>Color:</span>
                        {colorElements}
                    </ColorContainer>
                    <AddToCardButton onClick={() => props.addItem(props.shopItem)}>
                        Add To Cart <strong>${props.shopItem.price}</strong>
                    </AddToCardButton>
                </ItemDetailInfoBlock>
            </ItemDetailContainer>
        );
    } else {
        return <div></div>;
    }
};

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    shopItem: selectShopItem(+ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: ShopData) => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemDetail as any);
