import { put, takeLatest } from "redux-saga/effects";
import { postSagaActions } from "../sagas/sagaActions";
import { postSliceActions } from "./post.reducer";

export function* fetchDataSaga() {
  yield put(postSliceActions.setPostsLoading());
  yield put(postSliceActions.setPosts(["post 1"]));
}

export function* fetchDataSagaLoading() {
  yield put(postSliceActions.setPostsLoading());
}

export default function* postSaga() {
  yield takeLatest(postSagaActions.FETCH_DATA_POSTS, fetchDataSaga);
  yield takeLatest(postSagaActions.FETCH_DATA_POSTS_LOADING, fetchDataSaga);
}
