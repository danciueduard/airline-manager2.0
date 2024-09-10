import { Routes } from "@angular/router";
import { FleetComponent } from "./footer/menu/fleet/fleet.component";
import { AirportsComponent } from "./footer/menu/airports/airports.component";
import { StaffComponent } from "./footer/menu/staff/staff.component";

export const routes: Routes = [
  { path: "fleet", component: FleetComponent },
  { path: "airports", component: AirportsComponent },
  { path: "staff", component: StaffComponent },
];
