import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { MapComponent } from "./content/map/map.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { popup } from "leaflet";
import { AdminToolsComponent } from "./content/admin-tools/admin-tools.component";
import { SupabaseService } from "./shared/supabase/supabase-services/supabase-client.service";
import { SlideMenuComponent } from "./header/slide-menu/slide-menu.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    AdminToolsComponent,
    SlideMenuComponent,
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
    // this.router.navigate([{ outlets: { popup: "shop/airplanes" } }]);
    // this.router.navigate([{ outlets: { popup: "admin/manage-workers" } }]);
    // this.router.navigate(["shop/airplanes"]);
    // this.supabaseService.getAirportByICAO("LROP");
    newLocal.supabaseService.getPublicImgUrl("img", "planeImg/a320.jpg");
  }
}
