import { all, call } from 'redux-saga/effects';
import { getShopDataStartSaga } from './shop/sagas';
import { getPhotosStartSaga } from './landing/sagas';
import { signOutStartSaga, signInStartSaga } from './user/sagas';

export default function* rootSaga() {
    yield all([
        call(getPhotosStartSaga),
        call(getShopDataStartSaga),
        call(signInStartSaga),
        call(signOutStartSaga)
    ]);
}
