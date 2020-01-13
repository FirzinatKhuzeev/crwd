import styled from "styled-components";

export const ImageContainer = styled.img`
    display: block;
    background-color: #eee;
    margin: ${({ margin }: { margin: number }) => `${margin}px`};
`;
