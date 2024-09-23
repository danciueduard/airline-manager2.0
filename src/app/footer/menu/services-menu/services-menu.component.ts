import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FuelComponent } from "./fuel/fuel.component";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-services-menu",
  standalone: true,
  imports: [CommonModule, FuelComponent, RouterModule],
  templateUrl: "./services-menu.component.html",
  styleUrls: ["./services-menu.component.css"], // Correct to styleUrls (with 's')
})
export class ServicesMenuComponent {}
