import React, { ReactElement } from 'react'
import { Employee } from '../api/employee';

type EmployeeProps = Employee

const EmployeeComponent = ({
  employee_name,
  employee_age,
  employee_salary
}: EmployeeProps): ReactElement => {
  return (
    <ul>
      <li>{employee_name}</li>
      <li>{employee_age}</li>
      <li>{employee_salary}</li>
    </ul>
  );
}

export default EmployeeComponent;