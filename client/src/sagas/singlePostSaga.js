import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_SINGLE_POST } from "actions/types";
import { fetchSinglePost } from "apis";
import { setSinglePost, setSinglePostError } from "actions";

function* handleSinglePostLoad({ id }) {
  try {
    if (id) {
      const post = yield call(fetchSinglePost(id));
      yield put(setSinglePost(post));
    }
  } catch (error) {
    yield put(setSinglePostError(error.toString()));
  }
}

export default function* watchSinglePostLoad() {
  yield takeEvery(LOAD_SINGLE_POST, handleSinglePostLoad);
}
