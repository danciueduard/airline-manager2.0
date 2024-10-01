import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaneModel } from "../../../shared/supabase/supabase-models/UploadPlanes.model";
import { SupabaseStoreService } from "../../../shared/supabase/supabase-services/supabase-store-service.service";

@Component({
  selector: "app-airplane-shop",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./airplane-shop.component.html",
  styleUrls: ["./airplane-shop.component.css"], // Corrected to 'styleUrls' (plural)
})
export class AirplaneShopComponent implements OnInit {
  planes: PlaneModel[] | null = []; // Initialized as an empty array or null
  error: string = ""; // Error message handling
  loading: boolean = true; // Loading initialized to true

  constructor(private supabaseStoreService: SupabaseStoreService) {}

  averageFuelCalculator(min: number, max: number): number {
    return (min + max) / 2;
  }

  ngOnInit(): void {
    this.loadPlanes();
  }

  loadPlanes(): void {
    this.supabaseStoreService.getPlanes().subscribe({
      next: (res: any) => {
        if (res && res.data) {
          this.planes = res.data;
        } else {
          this.planes = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load planes";
        console.error(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
