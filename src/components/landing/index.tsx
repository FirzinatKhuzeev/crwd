import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { Photo } from '../../store/landing/types';
import Gallery from '../gallery';
import { selectIsFetching, selectPhotos } from '../../store/landing/selectors';
import { getPhotosStart } from '../../store/landing/actions';

type OwnProps = {};

type PhotoState = {
    photos: Photo[];
    isFetching: boolean;
};

type DispatchProps = {
    getPhotos: () => void;
};

type Props = OwnProps & PhotoState & DispatchProps;

const Landing: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        props.getPhotos();
        // eslint-disable-next-line
    }, []);

    if (props.isFetching && !props.photos) {
        return <div>Loading...</div>;
    }

    const photos = props.photos.map(p => {
        return {
            id: p.id,
            src: p.urls.small,
            width: p.width,
            height: p.height
        };
    });

    return <Gallery photos={photos} />;
};

const mapStateToProps = (state: AppState) => ({
    photos: selectPhotos(state),
    isFetching: selectIsFetching(state)
});

const mapDispatchToProps = (dipatch: any) => ({
    getPhotos: () => dipatch(getPhotosStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
