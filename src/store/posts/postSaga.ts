import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPosts, Post } from "../../api/post";
import { FETCH_POSTS } from "./postSlice";

const prefix = "POST";

function* getPostsWorker() {
  try {
    const posts: Promise<Post[]> = yield call(fetchPosts);
    yield put({
      type: `${prefix}/${FETCH_POSTS.SUCCESS}`,
      payload: { posts: posts },
    });
  } catch (e: any) {
    yield put({
      type: `${prefix}/${FETCH_POSTS.FAILURE}`,
      payload: { message: e.message },
    });
  }
}

export default function* getPostsWatcher() {
  yield takeEvery(`${prefix}/${FETCH_POSTS.REQUEST}`, getPostsWorker);
}
