import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Axios, AxiosError } from "axios";
import { RootState } from "..";
import { Employee } from "../../api/employee";
import createFetchSlice from "../../utils/createFetchSlice";

type State = {
  loading: boolean;
  data: Employee[];
  error: AxiosError | null;
};

const initialState: State = {
  loading: false,
  data: [],
  error: null,
};

const employeeSlice = createFetchSlice<Employee, State>(
  "EMPLOYEE",
  initialState
);

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;

export const selectEmployee = (state: RootState) => state.employee;
