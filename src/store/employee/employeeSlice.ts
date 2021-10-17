import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { Employee } from "../../api/employee";

export const FETCH_EMPLOYEES = {
  REQUEST: "FETCH_REQUEST",
  SUCCESS: "FETCH_SUCCESS",
  FAILURE: "FETCH_FAILURE",
};

type State = {
  loading: boolean;
  employees: Employee[];
  error: string | null;
};

const initialState = {
  loading: false,
  employees: [],
  error: null,
} as State;

const name = "EMPLOYEE";
const employeeSlice = createSlice({
  name,
  initialState,
  reducers: {
    [FETCH_EMPLOYEES.REQUEST]: (state) => {
      state.loading = true;
    },
    [FETCH_EMPLOYEES.SUCCESS]: (
      state,
      action: PayloadAction<{ employees: Employee[] }>
    ) => {
      state.loading = false;
      state.employees = action.payload.employees;
    },
    [FETCH_EMPLOYEES.FAILURE]: (
      state,
      action: PayloadAction<{ error: any }>
    ) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default employeeSlice.reducer;

export const selectEmployee = (state: RootState) => state.employee;
