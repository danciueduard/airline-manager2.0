import { AfterViewInit, Component, OnInit } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { icons } from "./icons";
import { latLng, marker, polyline, tileLayer } from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import { StorageContainerService } from "../../shared/storage-container.service";
import * as flightLogic from "./flightLogic";

@Component({
  selector: "app-map",
  standalone: true,
  imports: [LeafletModule],
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit, AfterViewInit {
  constructor(private storageContainer: StorageContainerService) {}

  routes: any = [];

  markersArray: any = [
    marker([44.57054724019442, 26.095390875193942], {
      icon: icons.airportIcon,
    }),
    marker([47.1785011292, 27.6205997467], {
      icon: icons.airportIcon,
    }),
  ];

  ngOnInit(): void {
    this.storageContainer.getAirports();
  }

  ngAfterViewInit(): void {
    this.markersArray.push(
      this.createMarker(
        flightLogic.calculatePlanePosition(
          [44.57054724019442, 26.095390875193942],
          [47.1785011292, 27.6205997467],
          78
        )
      )
    );
  }

  options = {
    zoomControl: false,
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        attribution: "",
      }),
      // Add the polyline here
      polyline(
        [
          [44.57054724019442, 26.095390875193942],
          [47.1785011292, 27.6205997467],
        ],
        {
          color: "blue",
          weight: 3,
          opacity: 0.7,
          smoothFactor: 1,
          noClip: true,
        }
      ),
    ],
    zoom: 7,
    center: latLng(44.57054724019442, 26.095390875193942),
  };

  markers = this.markersArray;

  createMarker(coords) {
    return marker(coords, {
      icon: icons.planeIcon,
    });
  }
}
