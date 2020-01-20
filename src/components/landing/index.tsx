import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { IPhoto } from '../../store/landing/types';
import Gallery from '../gallery';
import { getPhotos } from '../../store/landing/utils';
import { selectIsFetching, selectPhotos } from '../../store/landing/selectors';

type OwnProps = {};

type PhotoState = {
    photos: IPhoto[];
    isFetching: boolean;
}

type DispatchProps = {
    getPhotos: () => void;
};

type Props = OwnProps & PhotoState & DispatchProps;

const Landing: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        props.getPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.getPhotos]);

    if (props.isFetching && !props.photos) {
        return (<div>Loading...</div>);
    }

    let photos = props.photos.map(p => { return { src: p.download_url, width: p.width, height: p.height } });

    return (<Gallery photos={photos} />);
}

const mapStateToProps = (state: AppState) => ({
    photos: selectPhotos(state),
    isFetching: selectIsFetching(state),
});

const mapDispatchToProps = (dipatch: any) => ({
    getPhotos: () => dipatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
