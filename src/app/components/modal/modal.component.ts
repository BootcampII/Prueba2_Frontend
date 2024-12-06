import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalTypes } from '../../models/modal.types';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { DepartmentService } from '../../services/department/department.service';
import { response } from 'express';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() mode: ModalTypes.DEPARTMENT | ModalTypes.EMPLOYEE =
    ModalTypes.DEPARTMENT;

  @Output() close = new EventEmitter<void>();

  department: Department = {
    codeDepartment: 0,
    nameDepartment: '',
  };

  employee = {
    codeEmployee: 0,
    name: '',
    lastName1: '',
    lastName2: '',
    codeDepartment: 0,
  };

  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService
  ) {}

  save() {
    if (this.mode === ModalTypes.DEPARTMENT) {
      //Simulate call backend
      this.departmentService.createDepartment(this.department).subscribe({
        next: (response) => {
          console.log('Saved', response);
          this.close.emit();
        },
        error: (err) => console.error('Error to save Department', err),
      });
      console.log('save department');
    } else if (this.mode === ModalTypes.EMPLOYEE) {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: (response) => {
          console.log('Employee Save', response);
          this.close.emit();
        },
        error: (err) => console.error('Error to save employee', err),
      });
    }
  }
}
