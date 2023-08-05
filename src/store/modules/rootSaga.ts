import { all } from 'redux-saga/effects';

import config from './config/saga';
import difficulties from './difficulties/saga';
import session from './session/saga';

export default function* rootSaga():any {
    return yield all([
        config,
        difficulties,
        session,
    ]);
}
