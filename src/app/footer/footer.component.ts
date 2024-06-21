import { Component } from "@angular/core";
import { FleetComponent } from "./menu/fleet/fleet.component";
import { MenuComponent } from "./menu/menu.component";
import { AirportsComponent } from "./menu/airports/airports.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [FleetComponent, MenuComponent, AirportsComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {}
