import { all } from 'redux-saga/effects';

import config from './config/saga';

export default function* rootSaga():any {
    return yield all([
        config
    ]);
}
