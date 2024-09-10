import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "staff-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./staff-item.component.html",
  styleUrl: "./staff-item.component.css",
})
export class StaffItem {
  @Input() staff = [];

  constructor() {}

  imgSrcHelper(role: string) {
    return `../../../../assets/img/staff/${role}-staff.png`;
  }

  manageStaff(name) {
    console.log(name);
  }
}
