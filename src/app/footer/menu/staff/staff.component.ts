import { Component, ElementRef, OnInit } from "@angular/core";
import { StorageContainerService } from "../../../shared/storage-container.service";
import { CommonModule } from "@angular/common";
import { Element } from "@angular/compiler";
import { StaffItem } from "./staff-item/staff-item.component";
import { StaffTeamComponent } from "./staff-team/staff-team.component";

@Component({
  selector: "app-staff",
  standalone: true,
  imports: [CommonModule, StaffItem, StaffTeamComponent],
  templateUrl: "./staff.component.html",
  styleUrl: "./staff.component.css",
})
export class StaffComponent implements OnInit {
  staff = [];
  teams = [];

  constructor(private storageContainer: StorageContainerService) {}

  selectStaff() {}

  ngOnInit(): void {
    this.staff = this.storageContainer.getStaff();
    this.teams = this.storageContainer.getTeams();
  }

  test() {
    console.log();
  }
}
