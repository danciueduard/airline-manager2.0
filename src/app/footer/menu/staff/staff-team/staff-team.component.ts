import { Component, Input, OnInit } from "@angular/core";
import { StaffItem } from "../staff-item/staff-item.component";
import { StaffTeamComposition } from "./StaffTeamComposition.model";
import { CommonModule } from "@angular/common";
import { StarRatingComponent } from "../star-rating/star-rating.component";

//////////////////////////////////////////////////////////////////////////////////////////
// const temporaryTeam = {
//   teamRoute: {
//     airport1: "ICAO1",
//     airport2: "ICAO2",
//   },
//   teamName: "Team 1",
//   teamPlane: { planeName: "Airbus A320", planeId: 1 },
//   teamPilots: [
//     {
//       role: "pilot",
//       rank: "captain",
//       name: "John One",
//       skill: 10,
//       experience: 12500,
//       salary: 100000,
//       hired: true,
//       id: 11,
//     },
//     {
//       role: "pilot",
//       rank: "first officer",
//       name: "John Two",
//       skill: 10,
//       experience: 12500,
//       salary: 100000,
//       hired: false,
//       id: 22,
//     },
//   ],
//   teamCrew: [
//     {
//       name: "Jane One",
//       id: 3,
//       role: "stewardese",
//       skill: 10,
//       experience: 12500,
//       salary: 100000,
//       hired: true,
//     },
//     {
//       name: "Jane Two",
//       id: 4,
//       role: "stewardese",
//       skill: 10,
//       experience: 12500,
//       salary: 100000,
//       hired: true,
//     },
//     {
//       name: "Jane Three",
//       id: 5,
//       role: "stewardese",
//       skill: 10,
//       experience: 12500,
//       salary: 100000,
//       hired: true,
//     },
//     {
//       name: "Jane Four",
//       id: 6,
//       role: "stewardese",
//       skill: 10,
//       experience: 12500,
//       salary: 100000,
//       hired: true,
//     },
//   ],
//   progress: 1, // coming soon
//   rating: 2.5,
// };
//////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: "app-staff-team",
  standalone: true,
  imports: [StaffItem, CommonModule, StarRatingComponent],
  templateUrl: "./staff-team.component.html",
  styleUrl: "./staff-team.component.css",
})
export class StaffTeamComponent implements OnInit {
  @Input() teamComposition;

  ngOnInit(): void {
    // this.teamComposition = temporaryTeam;
  }

  getPlaneById(id) {
    console.log(id);
  }

  getAirportByICAO(icao) {
    console.log(icao);
  }

  selectTeam(team) {
    console.log(team);
  }
}
