import { takeEvery, put, call, fork } from "redux-saga/effects";
import { LOAD_POSTS, LOAD_SINGLE_POST } from "actions/types";
import { setError, setPosts, setSinglePost, setSinglePostError } from "actions";
import { fetchPosts, fetchSinglePost } from "apis";

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

function* watchSinglePostLoad() {
  yield takeEvery(LOAD_SINGLE_POST, handleSinglePostLoad);
}

function* handlePostsLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* watchPostsLoad() {
  yield takeEvery(LOAD_POSTS, handlePostsLoad);
}

const postsSagas = [fork(watchSinglePostLoad), fork(watchPostsLoad)];

export default postsSagas;
