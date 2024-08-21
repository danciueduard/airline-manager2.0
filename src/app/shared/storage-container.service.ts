import { Injectable } from "@angular/core";
import { Airplane } from "./Airplane.model";

@Injectable({
  providedIn: "root",
})
export class StorageContainerService {
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
  airports = [
    {
      name: "Aeroport International Henri Coanda",
      country: "ro",
      coords: null,
      parkingSpots: 4,
      hangars: 1,
      routes: 3,
      helipads: 1,
    },
    {
      name: "Aeroport International Iasi",
      country: "ro",
      coords: null,
      parkingSpots: 2,
      hangars: 0,
      routes: 1,
      helipads: 0,
    },
  ];

  constructor() {}

  getFleet() {
    return this.fleet;
  }

  getAirports() {
    return this.airports;
  }
}
