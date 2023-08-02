import { all } from 'redux-saga/effects';

import config from './config/saga';
import difficulties from './difficulties/saga';

export default function* rootSaga():any {
    return yield all([
        config,
        difficulties,
    ]);
}
