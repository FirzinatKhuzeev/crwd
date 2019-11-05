import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageSrc }: { imageSrc: string }) => `url(${imageSrc})`};
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

export const ItemLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`