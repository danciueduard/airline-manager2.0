import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MapComponent } from "./content/map/map.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MapComponent, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "airline-manager2.0";
}
