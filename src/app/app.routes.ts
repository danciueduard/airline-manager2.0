import { Routes } from "@angular/router";
import { FleetComponent } from "./footer/menu/fleet/fleet.component";
import { AirportsComponent } from "./footer/menu/airports/airports.component";
import { StaffComponent } from "./footer/menu/staff/staff.component";
import { ServicesMenuComponent } from "./footer/menu/services-menu/services-menu.component";
import { FuelComponent } from "./footer/menu/services-menu/fuel/fuel.component";
import { MaintenanceComponent } from "./footer/menu/services-menu/maintenance/maintenance.component";
import { AdminToolsComponent } from "./admin-tools/admin-tools.component";
import { AppComponent } from "./app.component";
import { AddPlanesComponent } from "./admin-tools/add-planes/add-planes.component";

export const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "fleet", component: FleetComponent },
  { path: "airports", component: AirportsComponent },
  { path: "staff", component: StaffComponent },
  {
    path: "services",
    component: ServicesMenuComponent,
    children: [
      { path: "fuel", component: FuelComponent },
      { path: "maintenance", component: MaintenanceComponent },
    ],
  },
  {
    path: "admin",
    component: AdminToolsComponent,
    outlet: "popup",
    children: [
      {
        path: "add-planes",
        component: AddPlanesComponent,
      },
    ],
  },
];
