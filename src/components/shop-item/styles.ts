import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageSrc }: { imageSrc: string }) => `url(${imageSrc})`};
`;

export const ShopItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${ImageContainer} {
      opacity: 0.7;
    }
    button {
      display: block;
    }
  }
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

export const ItemLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
`