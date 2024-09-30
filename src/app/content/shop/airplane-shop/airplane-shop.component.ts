import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaneModel } from "../../../shared/supabase/supabase-models/UploadPlanes.model";
import { catchError, map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { SupabaseService } from "../../../shared/supabase/supabase-services/supabase-client.service";
import { SupabaseStoreService } from "../../../shared/supabase/supabase-services/supabase-store-service.service";

@Component({
  selector: "app-airplane-shop",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./airplane-shop.component.html",
  styleUrl: "./airplane-shop.component.css",
})
export class AirplaneShopComponent implements OnInit {
  planes: any | null = [];
  error: string;
  loading: boolean;

  constructor(private supabaseStoreService: SupabaseStoreService) {}

  averageFuelCalculator(min: number, max: number) {
    return (min + max) / 2;
  }

  ngOnInit(): void {
    this.supabaseStoreService
      .getPlanes()
      .pipe(
        map((res: PlaneModel[]) => res),
        catchError((error) => {
          this.error = "Failed to load planes";
          console.error(error);
          return of([]); //
        })
      )
      .subscribe((res: any) => {
        this.planes = res.data;
        this.loading = false;
      });
  }
}
