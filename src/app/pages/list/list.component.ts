import { Component } from '@angular/core';
import { ModalTypes } from '../../models/modal.types';
import { ModalComponent } from '../../components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  ModalTypes = ModalTypes;
  modalIsOpen = false;
  modalMode: ModalTypes.DEPARTMENT | ModalTypes.EMPLOYEE =
    ModalTypes.DEPARTMENT;

  openModal(mode: ModalTypes.DEPARTMENT | ModalTypes.EMPLOYEE) {
    this.modalMode = mode;
    this.modalIsOpen = true;
  }
  closeModal() {
    this.modalIsOpen = false;
  }
}
