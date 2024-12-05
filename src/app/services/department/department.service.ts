import { Injectable, inject } from '@angular/core';
import { Department } from '../../models/department.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private readonly apiUrl = 'http://localhost:3000/departments/';
  private http = inject(HttpClient);

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartmentById(codeDepartment: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}${codeDepartment}`);
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(
    codeDepartment: number,
    department: Partial<Department>
  ): Observable<Department> {
    return this.http.patch<Department>(
      `${this.apiUrl}${codeDepartment}`,
      department
    );
  }

  deleteDepartment(
    codeDepartment: number
  ): Observable<{ message: string; department: Department }> {
    return this.http.delete<{ message: string; department: Department }>(
      `${this.apiUrl}${codeDepartment}`
    );
  }
}
