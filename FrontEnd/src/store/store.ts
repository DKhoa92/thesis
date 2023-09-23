import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootSaga from "./rootSaga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lang", "auth", "sale"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

export default store;

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
