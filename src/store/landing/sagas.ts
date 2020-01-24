import { DATA_GATHERING_START } from './types';
import { put, takeLatest } from 'redux-saga/effects';
import { getPhotosSuccess, getPhotosFailed } from './actions';
import PhotosService from '../../api/photos-service';

export function* getPhotosSaga() {
    try {
        const photoService = new PhotosService();
        const response = yield photoService.getPhotos();
        yield put(getPhotosSuccess(response));
    } catch {
        yield put(getPhotosFailed());
    }
}

export function* getPhotosStartSaga() {
    yield takeLatest(DATA_GATHERING_START, getPhotosSaga);
}
