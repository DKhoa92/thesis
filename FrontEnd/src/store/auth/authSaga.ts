import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginAsync,
  LoginAsyncPayload,
  setAuth,
  setMyProfile,
  getMyProfileAsync,
} from "./authSlice";
import { message } from "antd";
import { setLoadingPage } from "store/app/app.slice";
import api from "service/apiService";
import { PayloadAction } from "@reduxjs/toolkit";

function* loginSaga(action: PayloadAction<LoginAsyncPayload>) {
  const { username, password } = action.payload;
  yield put({ type: setLoadingPage.type, payload: true });
  const { response, error } = yield call(async () => {
    try {
      const response = await api.post("/login", { username, password });
      return { response };
    } catch (error) {
      return { error };
    }
  });
  if (response) {
    const { tokenInfo } = response.data;
    yield put({
      type: setAuth.type,
      payload: {
        ...tokenInfo,
      },
    });
  } else {
    message.error(error.message);
  }
  yield put({ type: setLoadingPage.type, payload: false });
}

function* watchLogin() {
  yield takeLatest(loginAsync, loginSaga);
}

// Get profile
function* getMyProfileSaga() {
  // yield put({ type: setLoadingPage.type, payload: true });
  const { response, error } = yield call(async () => {
    try {
      const response = await api.get("/staff/my-profile", {});
      return { response };
    } catch (error) {
      return { error };
    }
  });
  if (response) {
    yield put({ type: setMyProfile.type, payload: response });
  } else {
    message.error(error.message);
  }
  // yield put({ type: setLoadingPage.type, payload: false });
}
function* watchGetMyProfile() {
  yield takeLatest(getMyProfileAsync, getMyProfileSaga);
}

const authSaga = [watchLogin(), watchGetMyProfile()];
export default authSaga;
