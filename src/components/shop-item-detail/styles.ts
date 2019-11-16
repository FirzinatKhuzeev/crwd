import styled from "styled-components";

export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ItemDetailImageContainer = styled.div`
  width: 50vw;
`

export const ItemDetailImage = styled.div`
  width: 50%;
  float: right;
  height: 150%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageSrc }: { imageSrc: string }) => `url(${imageSrc})`};
`
export const ItemDetailInfoBlock = styled.div`
  width: 50vw;
  padding: 0 3em;
  h1 {
    margin-top:0;
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin-top: 1em;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1em;
`;

export const ColorContainer = styled.div`
  margin-top: 1em;
`;

export const ItemDetailDescription = styled.div`
  margin-top: 1em;
  width: 100%;
`;