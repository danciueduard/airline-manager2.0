import { Component } from "@angular/core";
import { FleetComponent } from "./menu/fleet/fleet.component";
import { MenuComponent } from "./menu/menu.component";
import { AirportsComponent } from "./menu/airports/airports.component";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [
    FleetComponent,
    MenuComponent,
    AirportsComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  menuOpen: boolean = false;
  activeTab: string;

  constructor(private router: Router) {}

  openMenu(activeTab: string) {
    this.activeTab = activeTab;
    if (this.menuOpen) return;
    this.menuOpen = true;
  }

  closeMenu(event: boolean) {
    this.menuOpen = event;
    this.router.navigate(["/"]);
  }
}

// The equivalent IsActiveMatchOptions for true is {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'}.
