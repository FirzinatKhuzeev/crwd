import React from 'react';
import { ImageContainer } from './styles';

type Props = {
    photo: any;
    margin: number;
};

const Photo = ({ photo, margin }: Props) => {
    return <ImageContainer margin={margin} {...photo} />;
};

export default Photo;
