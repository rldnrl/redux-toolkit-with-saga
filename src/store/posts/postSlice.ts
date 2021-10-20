import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { Post } from "../../api/post";

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

const reducers: SliceCaseReducers<State> = {
  FETCH_REQUEST: (state) => {
    state.loading = true;
  },
  FETCH_SUCCESS: (state, action: PayloadAction<{ posts: Post[] }>) => {
    state.posts = action.payload.posts;
    state.loading = false;
  },
  FETCH_FAILURE: (state, action: PayloadAction<{ error: any }>) => {
    state.error = action.payload.error;
    state.loading = false;
  },
};

const name = "POST";

const postSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const postActions = postSlice.actions;

export default postSlice.reducer;

export const selectPosts = (state: RootState) => state.posts;
