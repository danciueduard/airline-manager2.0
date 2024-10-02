import { Routes } from "@angular/router";
import { FleetComponent } from "./footer/menu/fleet/fleet.component";
import { AirportsComponent } from "./footer/menu/airports/airports.component";
import { StaffComponent } from "./footer/menu/staff/staff.component";
import { ServicesMenuComponent } from "./footer/menu/services-menu/services-menu.component";
import { FuelComponent } from "./footer/menu/services-menu/fuel/fuel.component";
import { MaintenanceComponent } from "./footer/menu/services-menu/maintenance/maintenance.component";

import { AppComponent } from "./app.component";
import { AdminToolsComponent } from "./content/admin-tools/admin-tools.component";
import { ManagePlanesComponent } from "./content/admin-tools/manage-planes/manage-planes.component";
import { ManageWorkersComponent } from "./content/admin-tools/manage-workers/manage-workers.component";
import { ShopComponent } from "./content/shop/shop.component";
import { AirplaneShopComponent } from "./content/shop/airplane-shop/airplane-shop.component";
import { CrewShopComponent } from "./content/shop/crew-shop/crew-shop.component";

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
        path: "manage-planes",
        component: ManagePlanesComponent,
      },
      {
        path: "manage-workers",
        component: ManageWorkersComponent,
      },
    ],
  },
  {
    path: "shop",
    component: ShopComponent,
    outlet: "popup",
    children: [
      {
        path: "airplanes",
        component: AirplaneShopComponent,
      },
      {
        path: "pilots",
        component: CrewShopComponent,
      },
      {
        path: "cabin-crew",
        component: CrewShopComponent,
      },
      {
        path: "engineers",
        component: CrewShopComponent,
      },
    ],
  },
];
