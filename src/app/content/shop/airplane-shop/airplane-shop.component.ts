import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SupabaseService } from "../../../shared/supabase/supabase-service.service";
import { PlaneModel } from "../../../shared/supabase/supabase-models/UploadPlanes.model";
import { catchError, map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-airplane-shop",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./airplane-shop.component.html",
  styleUrl: "./airplane-shop.component.css",
})
export class AirplaneShopComponent implements OnInit {
  planes: any = [];
  error: string;
  loading: boolean;

  constructor(private supabaseService: SupabaseService) {}

  averageFuelCalculator(min: number, max: number) {
    return (min + max) / 2;
  }

  ngOnInit(): void {
    this.supabaseService
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
