import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import employeeReducer from "./employee/employeeSlice";
import postsReducer from "./posts/postSlice";
import getEmployeeWatcher from "./employee/employeeSaga";
import getPostsWatcher from "./posts/postSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([getEmployeeWatcher(), getPostsWatcher()]);
}

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    posts: postsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
