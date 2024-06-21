import { Component } from "@angular/core";
import { Airplane } from "./Airplane.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-fleet",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./fleet.component.html",
  styleUrl: "./fleet.component.css",
})
export class FleetComponent {
  fleet: Airplane[] = [
    {
      planeImg: "../../../assets/img/airplanes/737.jpg",
      planeName: "Boeing 737",
      status: "in flight",
      assignedRoute: ["icao", "icao"],
      capacity: 183,
      range: 1234,
      condition: 99,
    },
    {
      planeImg: "../../../assets/img/airplanes/a320.jpeg",
      planeName: "Airbus 320",
      status: "in flight",
      assignedRoute: ["icao", "icao"],
      capacity: 183,
      range: 1234,
      condition: 99,
    },
    {
      planeImg: "../../../assets/img/airplanes/a330.jpg",
      planeName: "Airbus 330",
      status: "on ground",
      assignedRoute: ["icao", "icao"],
      capacity: 999,
      range: 9999,
      condition: 99,
    },
    {
      planeImg: "../../../assets/img/airplanes/747.jpg",
      planeName: "Boeing 747",
      status: "on ground",
      assignedRoute: ["icao", "icao"],
      capacity: 999,
      range: 9999,
      condition: 99,
    },
  ];
}
