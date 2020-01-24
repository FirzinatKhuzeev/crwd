import { put, takeLatest } from 'redux-saga/effects';
import { signOutSucceed, signInEmailSucceed } from './actions';
import { SIGN_OUT_START, SIGN_IN_EMAIL_START, SignInEmailStartAction } from './types';

export function* signOutSaga() {
    yield window.localStorage.setItem('authenticated', 'false');
    yield window.localStorage.removeItem('token');

    yield put(signOutSucceed());
}

export function* signOutStartSaga() {
    yield takeLatest(SIGN_OUT_START, signOutSaga);
}

export function* signInEmailSaga(action: SignInEmailStartAction) {
    const encodedData = yield window.btoa(`${action.payload.email}${action.payload.password}`);
    yield window.localStorage.setItem('token', encodedData);
    yield window.localStorage.setItem('authenticated', 'true');

    yield put(signInEmailSucceed({ isAuthenticated: true, uuid: action.payload.email }));
}

export function* signInStartSaga() {
    yield takeLatest(SIGN_IN_EMAIL_START, signInEmailSaga);
}
