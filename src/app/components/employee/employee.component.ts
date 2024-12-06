import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  private employeeService = inject(EmployeeService);
  employees: Employee[] = [];

  constructor() {
    this.employeeService
      .getEmployees()
      .subscribe((data: any) => (this.employees = data.employees));
  }
}
