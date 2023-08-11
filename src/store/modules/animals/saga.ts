import { getRandomAnimal } from '@helpers/AnimationHelper';
import { all, put, takeLatest } from 'redux-saga/effects';

import { unlockSuccessAction } from './actions';

function* unlock() {
    const animal = getRandomAnimal();
    yield put(unlockSuccessAction({ animal }));
}

export default all([
    takeLatest('@animals/UNLOCK', unlock),
]);
