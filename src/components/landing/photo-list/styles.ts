import styled from "styled-components";

export const Li = styled.li`
    height: 30vh;
    flex-grow: 1;
    list-style-type: none;
    padding: 1vh;
    &:last-child {
        flex-grow: 10;
    }
`;

export const Img = styled.img`
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
`;