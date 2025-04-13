import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice.ts";

const RootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
