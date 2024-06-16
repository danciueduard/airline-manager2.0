import { Component } from "@angular/core";
import { FleetComponent } from "./fleet/fleet.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [FleetComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {}
