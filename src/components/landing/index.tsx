import React, { useEffect } from 'react';
import { Img, Ul, Li } from './styles';
import { getPhotos } from '../../store/landing/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { IPhoto } from '../../store/landing/types';

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
    }, []);

    const images = [];
    for (let i = 1; i < 30; i++) {
        let url = `https://source.unsplash.com/random?sig=${i}`;
        let image = <Li key={i}><Img  src={url} alt="The unsplash image" /></Li>;
        images.push(image);
    }

    return (<div><Ul>{images}</Ul></div>);

    // return (
    //     <div>
    //         {this.props.isFetching ? (
    //             <div>Loading....</div>
    //         ) : (
    //                 <PhotoList photos={this.props.photos} />
    //             )}
    //     </div>
    // );
}

const mapStateToProps = (state: AppState) => ({
    photos: state.photo.photos,
    isFetching: state.photo.isFetching,
});

const mapDispatchToProps = (dipatch: any) => ({
    getPhotos: () => dipatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
