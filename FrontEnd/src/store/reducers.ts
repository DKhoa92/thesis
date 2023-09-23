import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app/app.slice";
import auhReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  app: appReducer,
  auth: auhReducer,
});

export default rootReducer;
