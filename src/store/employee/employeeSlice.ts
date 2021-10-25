import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { Employee } from "../../api/employee";

type State = {
  loading: boolean;
  employees: Employee[];
  error: string | null;
};

const initialState: State = {
  loading: false,
  employees: [],
  error: null,
};

const name = "EMPLOYEE";

const employeeSlice = createSlice({
  name,
  initialState,
  reducers: {
    FETCH_REQUEST: (state) => {
      state.loading = true;
    },
    FETCH_SUCCESS: (
      state,
      action: PayloadAction<{ employees: Employee[] }>
    ) => {
      state.loading = false;
      state.employees = action.payload.employees;
    },
    FETCH_FAILURE: (state, action: PayloadAction<{ error: any }>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;

export const selectEmployee = (state: RootState) => state.employee;
