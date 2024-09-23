import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { MapComponent } from "./content/map/map.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SupabaseService } from "./shared/supabase-service.service";
import { AdminToolsComponent } from "./admin-tools/admin-tools.component";
import { popup } from "leaflet";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    AdminToolsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "airline-manager2.0";

  constructor(
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  ngOnInit(): void {
    this.router.navigate([{ outlets: { popup: "admin/add-planes" } }]);
    // this.supabaseService.getAirportByICAO("LROP");
    this.supabaseService.getPublicImgUrl("img", "planeImg/a320.jpg");
  }
}
