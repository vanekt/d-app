import { put, takeLatest } from 'redux-saga/effects';
import { INIT_REQUEST, INIT_SUCCESS, INIT_FAILURE } from '../constants/user';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* initUser() {
  try {
    yield delay(3000);
    yield put({ type: INIT_SUCCESS });
  } catch (e) {
    yield put({ type: INIT_FAILURE });
  }
}

function* userSaga(ea) {
  yield takeLatest(INIT_REQUEST, initUser, ea);
}

export default userSaga;
