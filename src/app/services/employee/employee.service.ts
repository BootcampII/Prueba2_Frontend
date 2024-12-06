import { Injectable, inject } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly apiUrl = 'http://localhost:3000/employees/';
  private http = inject(HttpClient);

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/getEmployees`);
  }

  getEmployeeById(codeEmployee: number): Observable<Employee> {
    return this.http.get<Employee>(
      `${this.apiUrl}getEmployeeById/${codeEmployee}`
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/createEmployee`, employee);
  }

  updateEmployee(
    codeEmployee: number,
    employee: Partial<Employee>
  ): Observable<Employee> {
    return this.http.patch<Employee>(
      `${this.apiUrl}updateEmployee/${codeEmployee}`,
      employee
    );
  }

  deleteEmployee(
    codeEmployee: number
  ): Observable<{ message: string; employee: Employee }> {
    return this.http.delete<{ message: string; employee: Employee }>(
      `${this.apiUrl}deleteEmployee/${codeEmployee}`
    );
  }
}
