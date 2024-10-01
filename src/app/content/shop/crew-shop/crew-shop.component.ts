import { Component, OnInit } from "@angular/core";
import { CrewCardComponent } from "./crew-card/crew-card.component";
import { SupabaseStoreService } from "../../../shared/supabase/supabase-services/supabase-store-service.service";
import { CommonModule } from "@angular/common";
import { CrewModel } from "./crew-card/Crew.model";

@Component({
  selector: "app-crew-shop",
  standalone: true,
  imports: [CommonModule, CrewCardComponent],
  templateUrl: "./crew-shop.component.html",
  styleUrls: ["./crew-shop.component.css"],
})
export class CrewShopComponent implements OnInit {
  crew: CrewModel[] | null = [];
  error: string = "";
  planes: any;
  loading: boolean = true;

  constructor(private supabaseStoreService: SupabaseStoreService) {}

  ngOnInit(): void {
    this.loadCrew();
  }

  loadCrew(): void {
    this.supabaseStoreService.getCrew().subscribe({
      next: (res: any) => {
        if (res && res.data) {
          this.crew = res.data;
        } else {
          this.crew = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load crew members";
        console.error(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
