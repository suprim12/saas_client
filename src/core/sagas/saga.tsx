import { all, fork } from "redux-saga/effects";
import postSaga from "../post/post.saga";

export default function* rootSaga() {
  yield all([postSaga].map(fork));
}
