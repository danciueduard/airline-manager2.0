import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { StorageContainerService } from "../../../shared/storage-container.service";

@Component({
  selector: "app-airports",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./airports.component.html",
  styleUrl: "./airports.component.css",
})
export class AirportsComponent implements OnInit {
  airports: any = [];

  constructor(private storageContainer: StorageContainerService) {}

  countryFlag(country: string) {
    return `../../../../assets/country-flags/${country}.png`;
  }

  ngOnInit(): void {
    this.airports = this.storageContainer.getAirports();
  }
}
