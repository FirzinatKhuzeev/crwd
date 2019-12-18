import styled from "styled-components"

export const CheckoutModalContainer = styled.div`
  position: absolute;
  width: 245px;
  height: 345px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);
  background-color: #f8f8f8;
  border-radius: 3px;
  top: 65px;
  right: 80px;
  z-index: 5;
`;

export const CheckoutItems = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CheckoutModalButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 45px;
  letter-spacing: 0.5px;
  font-size: 15px;
  margin-top: 15px;
  border-radius: 3px;
  text-transform: uppercase;
  background-color: #4a4a4a;
  color: white;
  border: none;
  cursor: pointer;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
