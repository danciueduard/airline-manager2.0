import { Component, Input } from "@angular/core";
import * as bootstrap from "bootstrap";

@Component({
  selector: "app-modal-popup",
  standalone: true,
  imports: [],
  templateUrl: "./modal-popup.component.html",
  styleUrl: "./modal-popup.component.css",
})
export class ModalPopupComponent {
  @Input() title: string = "";
  @Input() message: string = "test";
  modalName: bootstrap.Modal | undefined;
  messageModal: any;

  save() {
    this.messageModal?.toggle();
  }
  openModal(element) {
    this.messageModal = new bootstrap.Modal(element, {});
    this.messageModal?.show();
  }
}
