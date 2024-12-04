import { Injectable, inject } from '@angular/core';
import { Department } from '../../models/department.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private readonly apiUrl = `${environment.apiUrl}/department/`;
  private http = inject(HttpClient);

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartmentById(codeDepartment: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}${codeDepartment}`);
  }
}
