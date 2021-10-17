import { takeEvery, call, put } from "redux-saga/effects";
import { Employees, fetchEmployees } from "../../api/employee";
import { FETCH_EMPLOYEES } from "./employeeSlice";

function* getEmployeeWorker() {
  try {
    const employees: Promise<Employees> = yield call(fetchEmployees);
    yield put({
      type: `EMPLOYEE/${FETCH_EMPLOYEES.SUCCESS}`,
      payload: { employees: employees },
    });
  } catch (e: any) {
    yield put({
      type: `EMPLOYEE/${FETCH_EMPLOYEES.FAILURE}`,
      payload: { message: e.message },
    });
  }
}

export default function* getEmployeeWatcher() {
  yield takeEvery(`EMPLOYEE/${FETCH_EMPLOYEES.REQUEST}`, getEmployeeWorker);
}
