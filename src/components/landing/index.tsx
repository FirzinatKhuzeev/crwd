import React, { useEffect } from 'react';
import { getPhotos } from '../../store/landing/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { IPhoto } from '../../store/landing/types';
import Gallery from '../gallery';

type OwnProps = {};

interface PhotoState {
    photos: IPhoto[];
    isFetching: boolean;
}

type DispatchProps = {
    getPhotos: any;
};

type Props = OwnProps & PhotoState & DispatchProps;

const Landing: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        props.getPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.isFetching && !props.photos) {
        return (<div></div>);
    }

    let photos = props.photos.map(p => { return { src: p.download_url, width: p.width, height: p.height } });

    return (<Gallery photos={photos} />);
}

const mapStateToProps = (state: AppState) => ({
    photos: state.photo.photos,
    isFetching: state.photo.isFetching,
});

const mapDispatchToProps = (dipatch: any) => ({
    getPhotos: () => dipatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
