import { all } from "redux-saga/effects";
import postsSaga from "sagas/postsSaga";
import singlePostSaga from "sagas/singlePostSaga";

function* rootSaga() {
  yield all([postsSaga(), singlePostSaga()]);
}

export default rootSaga;
