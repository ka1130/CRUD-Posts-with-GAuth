import { takeEvery, takeLatest, put, call, fork } from "redux-saga/effects";
import { LOAD_POSTS, LOAD_SINGLE_POST, CREATE_POST } from "actions/types";
import * as actions from "actions";
import * as api from "apis";
import history from "../history";

function* handleCreatePost({ post }) {
  try {
    yield call(api.createPost(post));
    history.push("/");
  } catch (error) {
    console.log(error); // handle error otherwise?
  }
}

function* watchCreatePost() {
  yield takeLatest(CREATE_POST, handleCreatePost);
}

function* handleSinglePostLoad({ id }) {
  try {
    if (id) {
      const post = yield call(api.fetchSinglePost(id));
      yield put(actions.setSinglePost(post));
    }
  } catch (error) {
    yield put(actions.setSinglePostError(error.toString()));
  }
}

function* watchSinglePostLoad() {
  yield takeEvery(LOAD_SINGLE_POST, handleSinglePostLoad);
}

function* handlePostsLoad() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.setPosts(posts));
  } catch (error) {
    yield put(actions.setError(error.toString()));
  }
}

function* watchPostsLoad() {
  yield takeEvery(LOAD_POSTS, handlePostsLoad);
}

const postsSagas = [
  fork(watchSinglePostLoad),
  fork(watchPostsLoad),
  fork(watchCreatePost)
];

export default postsSagas;
