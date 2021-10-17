import { useEffect } from "react";
import {
  FETCH_EMPLOYEES,
  selectEmployee,
} from "../store/employee/employeeSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

const useEmployee = () => {
  const { loading, employees, error } = useAppSelector(selectEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: `EMPLOYEE/${FETCH_EMPLOYEES.REQUEST}` });
  }, [dispatch]);

  return {
    loading,
    employees,
    error,
  };
};

export default useEmployee;
