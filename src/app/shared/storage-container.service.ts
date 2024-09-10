import { Injectable } from "@angular/core";
import { Airplane } from "./models/Airplane.model";

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
  staff = [
    {
      role: "pilot",
      name: "John Doe1",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "pilot",
      name: "John Doe",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe1",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe2",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe3",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer1",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer2",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer3",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer4",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },

    {
      role: "stewardese",
      name: "Jane Doe",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe1",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe2",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "stewardese",
      name: "Jane Doe3",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer1",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer2",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer3",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
    {
      role: "engineer",
      name: "John Doe Engineer4",
      skill: 10,
      experience: 12500,
      salary: 100000,
    },
  ];
  constructor() {}

  getFleet() {
    return this.fleet;
  }

  getAirports() {
    return this.airports;
  }

  getStaff() {
    return this.staff;
  }
}
