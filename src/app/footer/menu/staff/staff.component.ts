import { Component, ElementRef, OnInit } from "@angular/core";
import { StorageContainerService } from "../../../shared/storage-container.service";
import { CommonModule } from "@angular/common";
import { Element } from "@angular/compiler";
import { StaffItem } from "../../../shared/components/staff-item/staff-item.component";

@Component({
  selector: "app-staff",
  standalone: true,
  imports: [CommonModule, StaffItem],
  templateUrl: "./staff.component.html",
  styleUrl: "./staff.component.css",
})
export class StaffComponent implements OnInit {
  staff = [];

  constructor(private storageContainer: StorageContainerService) {}

  selectStaff() {}

  ngOnInit(): void {
    this.staff = this.storageContainer.getStaff();
  }

  test() {
    console.log();
  }
}