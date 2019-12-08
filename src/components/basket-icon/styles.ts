import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/basket.svg";

export const BasketIconContainer = styled.div`
  width: 25px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  bottom: 15px;
  left: 15px;
  text-align: center;
  background-color: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  color: white;
`;

export const IconContainer = styled(BasketIcon)`
  width: 24px;
  height: 24px;
`;