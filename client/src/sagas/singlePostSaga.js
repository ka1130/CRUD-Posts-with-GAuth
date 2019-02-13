import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_SINGLE_POST } from "actions/types";
import { fetchSinglePost } from "apis";
import { setSinglePost, setSinglePostError } from "actions";

function* handleSinglePostLoad() {
  console.log("fetching single post");
  const post = yield call(fetchSinglePost("7")); // change this hard-coded id
  yield put(setSinglePost(post));
}

export default function* watchSinglePostLoad() {
  yield takeEvery(LOAD_SINGLE_POST, handleSinglePostLoad);
}
