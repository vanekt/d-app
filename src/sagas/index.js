import { all } from 'redux-saga/effects';
import userSaga from './user';

export default function* rootSaga(extraArguments) {
  yield all([userSaga(extraArguments)]);
}
