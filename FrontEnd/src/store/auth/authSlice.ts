import { createSlice, createAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface TokenInfo {
  id: number;
  user: number;
  userType: number;
  jwt: string;
  expireIn: number;
  refreshToken: string;
  refreshTokenexpireIn: number;
  revoke: boolean;
  createdAt?: string;
  updatedAt?: string;
}
interface Auth {
  auth: TokenInfo | null;
  myProfile: {fullName: string, avatar: string};
}

const initialState: Auth = {
  auth: null,
  myProfile: {
    fullName: "",
    avatar: ""
  },
};

export const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      if (!action.payload) {
        localStorage.removeItem("deviceId");
      }
      state.auth = action.payload;
    },
    setMyProfile: (state, action) => {
      state.myProfile = action.payload.data;
    },
  },
});

export const { setAuth, setMyProfile } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.auth;
export const selectMyProfile = (state: RootState) => state.auth.myProfile;

export interface LoginAsyncPayload {
  username: string;
  password: string;
}
export const loginAsync = createAction(
  "auth/loginAsync",
  (payload: LoginAsyncPayload) => {
    return {
      payload,
    };
  }
);

export const getMyProfileAsync = createAction("auth/getMyProfileAsync");

export default authSlice.reducer;
