import { AfterViewInit, Component, OnInit } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { icons } from "./icons";
import {
  Icon,
  circle,
  icon,
  latLng,
  marker,
  polygon,
  tileLayer,
} from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import { StorageContainerService } from "../../shared/storage-container.service";
import { SlideMenuComponent } from "../../header/slide-menu/slide-menu.component";

@Component({
  selector: "app-map",
  standalone: true,
  imports: [LeafletModule],
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.css",
})
export class MapComponent implements OnInit {
  constructor(private storageContainer: StorageContainerService) {}

  ngOnInit(): void {
    this.storageContainer.getAirports();
  }

  options = {
    zoomControl: false,
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12,
        attribution: "...",

        // className: "map-dark-mode", // FOR DARK MODE
      }),
    ],
    zoom: 12,
    center: latLng(44.57054724019442, 26.095390875193942),
  };

  markers = [
    marker([44.57054724019442, 26.095390875193942], {
      icon: icons.airportIcon,
    }),
  ];
}
