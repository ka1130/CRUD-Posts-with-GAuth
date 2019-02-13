import { all } from "redux-saga/effects";
import postsSagas from "sagas/posts";

function* rootSaga() {
  yield all([...postsSagas]);
}

export default rootSaga;
