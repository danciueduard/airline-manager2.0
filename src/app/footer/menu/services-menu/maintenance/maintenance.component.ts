import { Component } from "@angular/core";
import { HangarComponent } from "./hangar/hangar.component";

@Component({
  selector: "app-maintenance",
  standalone: true,
  imports: [HangarComponent],
  templateUrl: "./maintenance.component.html",
  styleUrl: "./maintenance.component.css",
})
export class MaintenanceComponent {}
