import { createSlice, createAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface InitialState {
  loadingPage: boolean;
}

const initialState: InitialState = {
  loadingPage: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoadingPage: (state, action) => {
      state.loadingPage = action.payload;
    },
  },
});

export const { setLoadingPage } =
  appSlice.actions;

export const selectLoadingPage = (state: RootState) => state.app.loadingPage;

export default appSlice.reducer;
