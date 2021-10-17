import React, { ReactElement } from 'react'
import EmployeeComponent from '../components/Employee';
import useEmployee from '../hooks/useEmployee';

const EmployeesPage = (): ReactElement => {
  const { loading, employees, error } = useEmployee()

  if (loading) return <div>로딩 중입니다...</div>

  if (error) return <div>에러 발생!!!</div>

  return (
    <>
      {employees.map(employee => <EmployeeComponent key={employee.id} {...employee} />)}
    </>
  );
}

export default EmployeesPage;