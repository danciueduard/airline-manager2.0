import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { MapComponent } from "./content/map/map.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SupabaseService } from "./shared/supabase/supabase-service.service";
import { popup } from "leaflet";
import { AdminToolsComponent } from "./content/admin-tools/admin-tools.component";

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
    const newLocal = this;
    this.router.navigate([{ outlets: { popup: "shop/airplanes" } }]);
    // this.router.navigate([{ outlets: { popup: "admin/manage-workers" } }]);
    // this.router.navigate(["shop/airplanes"]);
    // this.supabaseService.getAirportByICAO("LROP");
    newLocal.supabaseService.getPublicImgUrl("img", "planeImg/a320.jpg");
  }
}
