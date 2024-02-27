import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slice/userSlice";
import chatReducer from "./slice/chatSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
  })
);

export const store = configureStore({
  reducer: {
    persistedState: persistedReducer,
    chat: chatReducer,
  },
});
