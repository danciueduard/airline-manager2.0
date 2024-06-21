import { Component } from "@angular/core";
import { FleetComponent } from "./fleet/fleet.component";
import { AirportsComponent } from "./airports/airports.component";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [FleetComponent, AirportsComponent],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.css",
})
export class MenuComponent {}
