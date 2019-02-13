import { takeEvery, takeLatest, put, call, fork } from "redux-saga/effects";
import { SIGN_IN, SIGN_OUT } from "actions/types";
import * as actions from "actions";

function* signinSaga() {
  yield;
  console.log("hello from signinSaga");
}

function* watchSigninSaga() {
  yield takeLatest(SIGN_IN, signinSaga);
}

const authSagas = [watchSigninSaga()];

export default authSagas;
