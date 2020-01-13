import React from 'react';
import { ImageContainer } from './styles';

type Props ={
    photo: any;
    margin: number;
    key: number;
}

const Photo = ({ photo, margin, key }: Props) => {
    return (
        <ImageContainer key={key} margin={margin} {...photo} />
    );
};

export default Photo;
