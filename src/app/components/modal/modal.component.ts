import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalTypes } from '../../models/modal.types';
import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  save() {
    if (this.mode === ModalTypes.DEPARTMENT) {
      //Simulate call backend
      console.log('save department');
    } else if (this.mode === ModalTypes.EMPLOYEE) {
      console.log('save employee');
    }
    this.close.emit();
  }
}
