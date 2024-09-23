import {
  AfterContentInit,
  Component,
  Input,
  input,
  OnInit,
} from "@angular/core";
import { StaffItem } from "../../../../../shared/components/staff-item/staff-item.component";
import { ProgressBarComponent } from "../../../../../shared/components/progress-bar/progress-bar.component";

//////////////////////////////////////////////////////////////////////////////////////////////
const temporaryStaff = [
  {
    id: 1,
    role: "engineer",
    name: "John Doe Engineer1",
    skill: 10,
    experience: 12500,
    salary: 100000,
    hired: false,
  },
  {
    id: 1,
    role: "engineer",
    name: "John Doe Engineer2",
    skill: 10,
    experience: 12500,
    salary: 100000,
    hired: false,
  },
  {
    id: 1,
    role: "engineer",
    name: "John Doe Engineer3",
    skill: 10,
    experience: 12500,
    salary: 100000,
    hired: false,
  },
  {
    id: 1,
    role: "engineer",
    name: "John Doe Engineer4",
    skill: 10,
    experience: 12500,
    salary: 100000,
    hired: false,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: "app-hangar",
  standalone: true,
  imports: [StaffItem, ProgressBarComponent],
  templateUrl: "./hangar.component.html",
  styleUrl: "./hangar.component.css",
})
export class HangarComponent implements OnInit, AfterContentInit {
  @Input() engineers = []; // for later: add a typescript Model

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.engineers = temporaryStaff; // TEMPORARY
  }
}
