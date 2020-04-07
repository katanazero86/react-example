import {call, put, takeEvery} from 'redux-saga/effects';

import * as types from './request/actionTypes';
import { requestSucceeded, requestFailed } from './request/actions';

function* fetchData(action) {
    try {
        console.log('sucess..');
        yield put(requestSucceeded('통신성공!'));
    } catch(error) {
        console.log('fail..');
        yield put(requestFailed(error.message));
    }
}

export default function* requestSaga() {
    yield takeEvery(types.REQUEST_FETCH, fetchData); // 발생시점이 되는 action type, 실행할 함수
}