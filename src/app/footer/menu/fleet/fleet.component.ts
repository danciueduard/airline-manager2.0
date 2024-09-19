import { Component, OnInit } from "@angular/core";
import { Airplane } from "./Airplane.model";
import { CommonModule } from "@angular/common";
import { StorageContainerService } from "../../../shared/storage-container.service";

@Component({
  selector: "app-fleet",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./fleet.component.html",
  styleUrl: "./fleet.component.css",
})
export class FleetComponent implements OnInit {
  fleet: Airplane[] = [];

  constructor(private storageContainer: StorageContainerService) {}

  ngOnInit(): void {
    this.fleet = this.storageContainer.getFleet();
  }
}
