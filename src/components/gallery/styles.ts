import styled from "styled-components";

export const GalleryContainer = styled.div`
    height: 100%;
`;

export const GalleryComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const ImageContainer = styled.img`
    display: block;
    background-color: #eee;
    margin: ${({ margin }: { margin: number }) => `${margin}px`};
`;
