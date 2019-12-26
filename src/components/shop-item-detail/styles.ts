import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ItemDetailImageContainer = styled.div`
    width: 45vw;
`;

export const ItemDetailImage = styled.div`
    width: 35%;
    float: right;
    height: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageSrc }: { imageSrc: string }) => `url(${imageSrc})`};
`;
export const ItemDetailInfoBlock = styled.div`
    width: 20vw;
    padding: 0 2em;
    h1 {
        margin-top: 0;
    }
`;

export const CustomButtonContainer = styled.button`
    border-radius: 5px;
    width: 100%;
    height: 35px;
    letter-spacing: 0.5px;
    margin-top: 1em;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
`;

export const SizeContainer = styled.div`
    display: flex;
    margin-top: 1em;
    padding-right: 10px;
`;

export const ColorContainer = styled.div`
    display: flex;
    margin-top: 1em;
    line-height: 30px;
    height: 30px;
`;

export const ItemDetailDescription = styled.div`
    margin-top: 1em;
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const SizeButtonLabel = styled.label`
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    text-align: center;
    cursor: pointer;
`;

export const SizeButton = styled.input.attrs({ type: 'radio' })`
    display: none;
    margin: 10px;
    &:checked + ${SizeButtonLabel} {
        background-image: none;
        background-color: #d0d0d0;
    }
`;

export const ColorButton = styled.div`
    width: 30px;
    height: 30px;
    margin-left: 5px;
    cursor: pointer;
    background-color: ${({ color }: { color: string }) => `${color}`};
    &:hover {
        background-color: #d0d0d0;
    }
`;
