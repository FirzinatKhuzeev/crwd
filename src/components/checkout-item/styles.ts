import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutItemDescription = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
`;

export const TextContainer = styled.span`
`;

export const CheckoutItemImageContainer = styled.div`
    width: 200px;
    padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const CheckoutItemQuantity = styled.span`
    display: flex;
`;

export const AddItem = styled.button`
    cursor: pointer;
    border: 0;
    padding: 0;
    background: 0;
    font-size: 16px;
    &::before {
        content: '+';
        font-size: 20px;
    }
`;

export const RemoveItem = styled(AddItem)`
    &::before {
        content: '-';
        line-height: 0px;
    }
`;

export const QuantityValue = styled.span`
    margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-left: 14px;
    cursor: pointer;
`;
