import { useEffect } from "react";
import {
  selectEmployee,
  employeeActions,
} from "../store/employee/employeeSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

const useEmployee = () => {
  const { loading, employees, error } = useAppSelector(selectEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(employeeActions.FETCH_REQUEST());
  }, [dispatch]);

  return {
    loading,
    employees,
    error,
  };
};

export default useEmployee;
