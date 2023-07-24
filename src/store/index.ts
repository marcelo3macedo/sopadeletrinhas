import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { persistor, store };

