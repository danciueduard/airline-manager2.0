import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FleetComponent } from "./fleet/fleet.component";
import { AirportsComponent } from "./airports/airports.component";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [FleetComponent, AirportsComponent, CommonModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.css",
})
export class MenuComponent {
  @Input() openedTab: string;
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCloseMenu() {
    this.closeMenu.emit(false);
  }
}
