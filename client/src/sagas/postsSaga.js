import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_POSTS } from "actions/types";
import { setError, setPosts } from "actions";
import { fetchPosts } from "apis";

function* handlePostsLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchPostsLoad() {
  yield takeEvery(LOAD_POSTS, handlePostsLoad);
}
