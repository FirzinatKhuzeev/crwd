import { Li, Ul, Img } from '../styles';
import React from 'react';
import { IPhoto } from '../../../store/landing/types';

type Props = {
    photos: IPhoto[];
};

const PhotoList: React.FC<Props> = props => {
    return (
        <Ul>
            {props.photos.map(photo => {
                return (
                    <Li key={photo.id}>
                        <Img src={photo.download_url} alt={photo.author} />
                    </Li>
                );
            })}
        </Ul>
    );
};

export default PhotoList;
