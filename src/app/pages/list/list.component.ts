import { Component } from '@angular/core';
import { ModalTypes } from '../../models/modal.types';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from '../../components/department/department.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule, DepartmentComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  ModalTypes = ModalTypes;
  view: 'departments' | 'employees' = 'departments';
  modalIsOpen = false;
  modalMode: ModalTypes.DEPARTMENT | ModalTypes.EMPLOYEE =
    ModalTypes.DEPARTMENT;

  employees = [
    { id: 1, name: 'Julian Corredor', position: 'It' },
    { id: 2, name: 'Mateo Granados', position: 'HR' },
    { id: 3, name: 'Daniela Torres', position: 'It' },
  ];

  openModal(mode: ModalTypes.DEPARTMENT | ModalTypes.EMPLOYEE) {
    this.modalMode = mode;
    this.modalIsOpen = true;
  }
  closeModal() {
    this.modalIsOpen = false;
  }
}
