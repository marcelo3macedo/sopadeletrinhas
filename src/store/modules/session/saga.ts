import { all, takeLatest } from 'redux-saga/effects';

function* create({ payload }:any) {
}

function* createSuccess() {
}

function* selectOption({ payload }:any) {
}

function* selectSuccess() {
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
