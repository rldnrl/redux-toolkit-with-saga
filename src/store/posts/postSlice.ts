import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Post } from "../../api/post";

export const FETCH_POSTS = {
  REQUEST: "FETCH_REQUEST",
  SUCCESS: "FETCH_SUCCESS",
  FAILURE: "FETCH_FAILURE",
};

type State = {
  loading: boolean;
  posts: Post[];
  error: string | null;
};

const initialState = {
  loading: false,
  posts: [],
  error: null,
} as State;

const name = "POST";

const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    [FETCH_POSTS.REQUEST]: (state) => {
      state.loading = true;
    },
    [FETCH_POSTS.SUCCESS]: (
      state,
      action: PayloadAction<{ posts: Post[] }>
    ) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
    [FETCH_POSTS.FAILURE]: (
      state,
      action: PayloadAction<{ error: any }>
    ) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;

export const selectPosts = (state: RootState) => state.posts;
