import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import saga from "./sagas/saga";
import postReducer, { POST_REDUCER_FEATURE } from "./post/post.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [POST_REDUCER_FEATURE]: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [],
});

sagaMiddleware.run(saga);

export default store;
