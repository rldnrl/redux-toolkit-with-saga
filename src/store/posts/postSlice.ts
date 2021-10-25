import { AxiosError } from "axios";
import { RootState } from "..";
import { Post } from "../../api/post";
import createFetchSlice from "../../utils/createFetchSlice";

type State = {
  loading: boolean;
  data: Post[];
  error: AxiosError | null;
};

const initialState = {
  loading: false,
  data: [],
  error: null,
} as State;

const postSlice = createFetchSlice<Post, State>("POST", initialState);

export const postActions = postSlice.actions;

export default postSlice.reducer;

export const selectPosts = (state: RootState) => state.posts;
