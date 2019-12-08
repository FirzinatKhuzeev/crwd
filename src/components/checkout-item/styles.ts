import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid grey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;
`;

export const AddItem = styled.div`
  cursor: pointer;
`;

export const RemoveItem = styled(AddItem).attrs({
  disabled: true
})`
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 14px;
  cursor: pointer;
`;
