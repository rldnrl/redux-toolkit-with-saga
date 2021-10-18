import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPosts, Post } from "../../api/post";
import { postActions } from "./postSlice";

function* getPostsWorker() {
  const { FETCH_SUCCESS, FETCH_FAILURE } = postActions;
  try {
    const posts: Post[] = yield call(fetchPosts);
    yield put(FETCH_SUCCESS({ posts }));
  } catch (e: any) {
    yield put(FETCH_FAILURE({ error: e.message }));
  }
}

export default function* getPostsWatcher() {
  const { FETCH_REQUEST } = postActions;
  yield takeEvery(FETCH_REQUEST, getPostsWorker);
}
