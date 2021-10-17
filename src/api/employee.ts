import axios from "axios";

export interface Employees {
  status: string;
  data: Employee[];
  message: string;
}

export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await axios.get<Employees>(
      "http://localhost:4000/employees"
    );
    return response.data.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
