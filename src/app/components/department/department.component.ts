import { Component, inject } from '@angular/core';
import { DepartmentService } from '../../services/department/department.service';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  private departmentService = inject(DepartmentService);
  departments: Department[] = [];

  constructor() {
    this.departmentService
      .getDepartments()
      .subscribe((data: Department[]) => (this.departments = data));
  }
}
