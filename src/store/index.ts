import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shopReducer from './shop/reducers';
import { checkoutReducer } from './checkout/reducers';
import { userReducer } from './user/reducers';
import photoReducer from './landing/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const rootResucer = combineReducers({
    shop: shopReducer,
    checkout: checkoutReducer,
    user: userReducer,
    photo: photoReducer
});

export type AppState = ReturnType<typeof rootResucer>;

export default function configureStorage() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootResucer, composeWithDevTools(middleWareEnhancer));
    sagaMiddleware.run(rootSaga);

    return store;
}
