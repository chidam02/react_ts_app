import { takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { IUserDetailsState, userDetailsActions } from "../slice";
import { NavigateFunction } from "react-router-dom";

import axios from "axios";

export function* registerUser(
  action: PayloadAction<{
    userData: IUserDetailsState;
    navigate: NavigateFunction;
  }>
) {
  const { status, data } = yield call(
    UserDetailsService.createUser,
    action.payload.userData
  );
  if (status === 200) {
    yield put(userDetailsActions.registerSuccess());
    return action.payload.navigate("/auth/signIn");
  } else {
    yield put(userDetailsActions.registerFailure({ status }));
  }
}

export function* loginUser(action: PayloadAction<IUserDetailsState>) {
  const { status, data } = yield call(UserDetailsService.login, action.payload);
  if (status === 200) {
    yield put(userDetailsActions.loginSuccess(data));
  } else {
    yield put(userDetailsActions.loginFailure({ status }));
  }
}

export function* refreshUserToken(
  action: PayloadAction<{ refreshToken: string; navigate: NavigateFunction }>
) {
  const { status, data } = yield call(UserDetailsService.refreshToken, {
    refreshToken: action.payload.refreshToken,
  });
  if (status === 200) {
    yield put(userDetailsActions.refreshTokenSuccess(data));
  } else {
    yield put(userDetailsActions.refreshTokenFailure({ status }));
    return action.payload.navigate("/auth/signIn");
  }
}

export function* logoutUser(
  action: PayloadAction<{ refreshToken: string; navigate: NavigateFunction }>
) {
  const accessToken = yield sessionStorage.getItem("accessToken");
  const { status } = yield call(UserDetailsService.logout, {
    refreshToken: action.payload.refreshToken,
    accessToken: accessToken,
  });
  if (status === 200) {
    yield put(userDetailsActions.refreshTokenFailure(""));
    return action.payload.navigate("/auth/signIn");
  }
}

export default function* userDetailsSagaLister() {
  yield takeLatest(userDetailsActions.register.type, registerUser);
  yield takeLatest(userDetailsActions.login.type, loginUser);
  yield takeLatest(userDetailsActions.refreshToken.type, refreshUserToken);
  yield takeLatest(userDetailsActions.logout.type, logoutUser);
}

//service

class UserDetailsService {
  private static domain: string = process.env.REACT_APP_API_URL??"https://express-first-app.onrender.com";
    
  static createUser = (data: IUserDetailsState) => {
    return axios.post(`${this.domain}/register`, data);
  };

  static login = (data: IUserDetailsState) => {
    return axios.post(`${this.domain}/login`, data);
  };

  static refreshToken = (data: { refreshToken: string }) => {
    return axios.post(`${this.domain}/getAccessToken`, data);
  };

  static logout = (data: { refreshToken: string; accessToken: string }) => {
    return axios.post(
      `${this.domain}/logout`,
      { refreshToken: data.refreshToken },
      { headers: { authorization: data.accessToken } }
    );
  };
}
