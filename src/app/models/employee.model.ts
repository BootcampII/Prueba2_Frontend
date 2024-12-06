export interface Employee {
  codeEmployee: number;
  name: string;
  lastName1: string;
  lastName2: string;
  codeDepartment: {
    codeDepartment: number;
    nameDepartment: string;
  };
}
