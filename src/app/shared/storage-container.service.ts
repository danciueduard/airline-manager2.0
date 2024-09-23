import { Injectable } from "@angular/core";
import { Airplane } from "../footer/menu/fleet/Airplane.model";

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
      coordinates: [44.57054724019442, 26.095390875193942],
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
      id: 1,
      role: "pilot",
      name: "John Doe1",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "pilot",
      name: "John Doe",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe1",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe2",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe3",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer1",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer2",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer3",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer4",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },

    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe1",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe2",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "stewardese",
      name: "Jane Doe3",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer1",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer2",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer3",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
    {
      id: 1,
      role: "engineer",
      name: "John Doe Engineer4",
      skill: 10,
      experience: 12500,
      salary: 100000,
      hired: false,
    },
  ];
  staffTeams = [
    {
      teamRoute: {
        airport1: "ICAO1",
        airport2: "ICAO2",
      },
      teamName: "Team 1",
      teamPlane: { planeName: "Airbus A320", planeId: 1 },
      teamPilots: [
        {
          role: "pilot",
          rank: "captain",
          name: "John One",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
          id: 11,
        },
        {
          role: "pilot",
          rank: "first officer",
          name: "John Two",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: false,
          id: 22,
        },
      ],
      teamCrew: [
        {
          name: "Jane One",
          id: 3,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
        {
          name: "Jane Two",
          id: 4,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
        {
          name: "Jane Three",
          id: 5,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
        {
          name: "Jane Four",
          id: 6,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
      ],
      progress: 1, // coming soon
      rating: 2.5,
    },
    {
      teamRoute: {
        airport1: "ICAO3",
        airport2: "ICAO4",
      },
      teamName: "Team 2",
      teamPlane: { planeName: "Airbus A320", planeId: 1 },
      teamPilots: [
        {
          role: "pilot",
          rank: "captain",
          name: "John One",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
          id: 11,
        },
        {
          role: "pilot",
          rank: "first officer",
          name: "John Two",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: false,
          id: 22,
        },
      ],
      teamCrew: [
        {
          name: "Jane One",
          id: 3,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
        {
          name: "Jane Two",
          id: 4,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
        {
          name: "Jane Three",
          id: 5,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
        {
          name: "Jane Four",
          id: 6,
          role: "stewardese",
          skill: 10,
          experience: 12500,
          salary: 100000,
          hired: true,
        },
      ],
      progress: 1, // coming soon
      rating: 2.5,
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

  getTeams() {
    return this.staffTeams;
  }
}
