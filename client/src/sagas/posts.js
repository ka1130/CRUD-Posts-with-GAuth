import { takeEvery, takeLatest, put, call, fork } from "redux-saga/effects";
import * as constants from "actions/types";
import * as actions from "actions";
import * as api from "apis";
import history from "../history";

function* handleEditPost({ payload }) {
  yield call(api.editPostRequest(payload.formValues, payload.id)); // further destructure
  history.push("/");
}

function* watchEditPost() {
  yield takeLatest(constants.EDIT_POST, handleEditPost);
}

function* handleDeletePost(action) {
  yield call(api.deletePostRequest(action.payload));
  history.push("/");
}

function* watchDeletePost() {
  yield takeLatest(constants.DELETE_POST, handleDeletePost);
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
  yield takeLatest(constants.CREATE_POST, handleCreatePost);
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
  yield takeEvery(constants.LOAD_SINGLE_POST, handleSinglePostLoad);
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
  yield takeEvery(constants.LOAD_POSTS, handlePostsLoad);
}

const postsSagas = [
  fork(watchSinglePostLoad),
  fork(watchPostsLoad),
  fork(watchCreatePost),
  fork(watchEditPost),
  fork(watchDeletePost)
];

export default postsSagas;
