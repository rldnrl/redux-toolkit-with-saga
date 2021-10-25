import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const createFetchSlice = <
  TData extends unknown,
  TState extends { loading: boolean; data: unknown[]; error: AxiosError | null }
>(
  name: string,
  initialState: TState
) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      FETCH_REQUEST: (state) => {
        state.loading = true;
      },
      FETCH_SUCCESS: (state, action: PayloadAction<{ data: TData[] }>) => {
        state.data = action.payload.data;
        state.loading = false;
      },
      FETCH_FAILURE: (state, action: PayloadAction<{ error: AxiosError }>) => {
        state.error = action.payload.error;
        state.loading = false;
      },
    },
  });

  return slice;
};

export default createFetchSlice;
