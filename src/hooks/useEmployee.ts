import { useEffect } from "react";
import {
  selectEmployee,
  employeeActions,
} from "../store/employee/employeeSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

const useEmployee = () => {
  const { loading, data: employees, error } = useAppSelector(selectEmployee);
  const dispatch = useAppDispatch();

  const { FETCH_REQUEST } = employeeActions;

  useEffect(() => {
    dispatch(FETCH_REQUEST());
  }, [dispatch]);

  return {
    loading,
    employees,
    error,
  };
};

export default useEmployee;
