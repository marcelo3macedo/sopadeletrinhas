import { isCorrectAnswer } from '@helpers/SessionHelper';
import { all, put, select, takeLatest } from 'redux-saga/effects';
import { nextAction, selectSuccessAction } from './actions';
import * as selectors from './selectors';

function* create({ payload }:any) {
}

function* createSuccess() {
}

function* selectOption({ payload }:any) {
    const { option } = payload;
    const { session, activeIndex } = yield select(selectors.session);

    const isCorrect = isCorrectAnswer(session, activeIndex, option);
    yield put(selectSuccessAction({ isCorrect }));
}

function* selectSuccess() {
    yield new Promise(resolve => setTimeout(() => {
        resolve(true);
    }, 3000));
    yield put(nextAction());
}

function* nextOption() {
}

function* abort() {
}

export default all([
    takeLatest('@session/CREATE', create),
    takeLatest('@session/CREATE_SUCCESS', createSuccess),
    takeLatest('@session/SELECT_OPTION', selectOption),
    takeLatest('@session/SELECT_SUCCESS', selectSuccess),
    takeLatest('@session/NEXT', nextOption),
    takeLatest('@session/ABORT', abort),
]);
