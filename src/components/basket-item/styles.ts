import styled from 'styled-components';

export const BasketItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`;

export const BasketItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const BasketItemImage = styled.img`
    width: 30%;
`;
export const ItemName = styled.span`
    font-size: 16px;
`;

export const ItemPrice = styled.span`
    font-size: 16px;
`;
