import { Routes } from "@angular/router";
import { FleetComponent } from "./footer/menu/fleet/fleet.component";
import { AirportsComponent } from "./footer/menu/airports/airports.component";
import { StaffComponent } from "./footer/menu/staff/staff.component";
import { ServicesMenuComponent } from "./footer/menu/services-menu/services-menu.component";

export const routes: Routes = [
  { path: "fleet", component: FleetComponent },
  { path: "airports", component: AirportsComponent },
  { path: "staff", component: StaffComponent },
  { path: "services", component: ServicesMenuComponent },
];
