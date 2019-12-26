import React from 'react';
import { Img, Ul, Li } from './styles';
import { getPhotos } from '../../store/landing/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { IPhoto } from '../../store/landing/types';
import PhotoList from './photo-list';

type OwnProps = {
}

interface PhotoState {
    photos: IPhoto[];
    isFetching: boolean;
}

type DispatchProps = {
    getPhotos: any;
}

type Props = OwnProps & PhotoState & DispatchProps;

class Landing extends React.Component<Props, any> {

    public componentDidMount() {
        if (this.props.photos.length === 0) {
            this.props.getPhotos();
        }
    }

    render() {
        const images = [];
        // for (let i = 1; i < 100; i++) {
        //     let url = `https://source.unsplash.com/random?sig=${i}`;
        //     let image = <Li><Img key={i} src={url} alt="The unsplash image" /></Li>;
        //     images.push(image);
        // }

        // if (this.props.isFetching) {
        //     console.log("fetching")
        //     return (<div>Empty</div>);
        // }
        // for (const key in this.props.photos) {
        //     const photo = this.props.photos[key];
        //     let image = <Li><Img key={photo.id} src={photo.url} alt={photo.author} /></Li>;
        //     images.push(image);
        // }
        return (
            <div>
                {this.props.isFetching ? <div>Loading....</div> : <PhotoList photos={this.props.photos} />}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    photos: state.photo.photos,
    isFetching: state.photo.isFetching
});

const mapDispatchToProps = (dipatch: any) => ({
    getPhotos: () => dipatch(getPhotos())
});
//<PhotoState, DispatchProps, OwnProps, AppState>
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
