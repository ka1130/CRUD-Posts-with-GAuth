import { all } from "redux-saga/effects";
import postsSaga from "sagas/postsSaga";

function* rootSaga() {
  yield all([postsSaga()]);
}

export default rootSaga;
