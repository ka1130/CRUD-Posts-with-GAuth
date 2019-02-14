import { takeEvery, takeLatest, put, call, fork } from "redux-saga/effects";
import { SIGN_IN, SIGN_OUT, SET_GAUTH } from "actions/types";

const gapiLoad = () => window.gapi.load("client:auth2");

const gapiInit = () => {
  window.gapi.client.init({
    client_id: process.env.REACT_APP_GOOGLE_API_KEY,
    scope: "email"
  });
};

function* signinSaga() {
  yield call(gapiLoad);
  yield call(gapiInit);
  const GoogleAuth = yield call(window.gapi.auth2.getAuthInstance);
  yield put({ type: SET_GAUTH, payload: GoogleAuth });
}

function* watchSigninSaga() {
  yield takeLatest(SIGN_IN, signinSaga);
}

const authSagas = [watchSigninSaga()];

export default authSagas;
