import { takeEvery, takeLatest, put, call, fork } from "redux-saga/effects";
import {
  LOAD_POSTS,
  LOAD_SINGLE_POST,
  CREATE_POST,
  EDIT_POST
} from "actions/types";
//more general import?
import * as actions from "actions";
import * as api from "apis";
import history from "../history";

function* handleEditPost({ payload }) {
  yield call(api.editPostRequest(payload.formValues, payload.id));
  history.push("/");
}

function* watchEditPost() {
  yield takeLatest(EDIT_POST, handleEditPost);
}

function* handleCreatePost({ post }) {
  try {
    yield call(api.createPost(post));
    history.push("/");
  } catch (error) {
    yield put(actions.setError(error.toString()));
    // separate error action to all errors?
    // here error action from fetchnig all posts reused - rightly so?
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
  fork(watchCreatePost),
  fork(watchEditPost)
];

export default postsSagas;
