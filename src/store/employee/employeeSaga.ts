import { takeEvery, call, put } from "redux-saga/effects";
import { Employee, fetchEmployees } from "../../api/employee";
import { employeeActions } from "./employeeSlice";

function* getEmployeeWorker() {
  const { FETCH_SUCCESS, FETCH_FAILURE } = employeeActions;
  try {
    const employees: Employee[] = yield call(fetchEmployees);
    yield put(FETCH_SUCCESS({ data: employees }));
  } catch (e: any) {
    yield put(FETCH_FAILURE({ error: e.message }));
  }
}

export default function* getEmployeeWatcher() {
  const { FETCH_REQUEST } = employeeActions;
  yield takeEvery(FETCH_REQUEST, getEmployeeWorker);
}
