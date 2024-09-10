import { Component, ElementRef, OnInit } from "@angular/core";
import { StorageContainerService } from "../../../shared/storage-container.service";
import { CommonModule } from "@angular/common";
import { Element } from "@angular/compiler";

@Component({
  selector: "app-staff",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./staff.component.html",
  styleUrl: "./staff.component.css",
})
export class StaffComponent implements OnInit {
  staff = [];

  constructor(private storageContainer: StorageContainerService) {}

  imgSrcHelper(role: string) {
    return `../../../../assets/img/staff/${role}-staff.png`;
  }

  selectStaff() {}

  ngOnInit(): void {
    this.staff = this.storageContainer.getStaff();
  }
}
