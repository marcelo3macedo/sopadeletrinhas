import { all } from 'redux-saga/effects';

import animals from './animals/saga';
import config from './config/saga';
import difficulties from './difficulties/saga';
import session from './session/saga';

export default function* rootSaga():any {
    return yield all([
        animals,
        config,
        difficulties,
        session,
    ]);
}
