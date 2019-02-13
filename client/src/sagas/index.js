import { all } from "redux-saga/effects";
import postsSagas from "sagas/posts";
import authSagas from "sagas/auth";

function* rootSaga() {
  yield all([...postsSagas, ...authSagas]);
}

export default rootSaga;
