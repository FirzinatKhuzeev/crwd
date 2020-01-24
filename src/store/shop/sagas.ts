import { getShopDataSuccess, getShopDataFailed } from './actions';
import { put, takeLatest } from 'redux-saga/effects';
import { SHOP_DATA_GATHERING_START } from './types';
import ShopService from '../../api/shop-service';

export function* getShopDataSaga() {
    try {
        const response = yield ShopService.getShopData();
        yield put(getShopDataSuccess(response));
    } catch {
        yield put(getShopDataFailed());
    }
}

export function* getShopDataStartSaga() {
    yield takeLatest(SHOP_DATA_GATHERING_START, getShopDataSaga);
}
