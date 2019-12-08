import styled from "styled-components"

export const CheckoutModalContainer = styled.div`
  position: absolute;
  width: 245px;
  height: 345px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #f8f8f8;
  top: 45px;
  right: 50px;
  z-index: 5;
`
export const CheckoutItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const CheckoutModalButton = styled.button`
  margin-top: auto;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
