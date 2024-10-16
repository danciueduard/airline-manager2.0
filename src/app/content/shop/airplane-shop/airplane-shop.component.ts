import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaneModel } from "../../../shared/supabase/supabase-models/UploadPlanes.model";
import { SupabaseStoreService } from "../../../shared/supabase/supabase-services/supabase-store.service";
import { catchError } from "rxjs";

@Component({
  selector: "app-airplane-shop",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./airplane-shop.component.html",
  styleUrls: ["./airplane-shop.component.css"],
})
export class AirplaneShopComponent implements OnInit {
  planes: PlaneModel[] | null = [];
  error: string = "";
  isLoading: boolean = true;

  constructor(private supabaseStoreService: SupabaseStoreService) {}

  averageFuelCalculator(min: number, max: number): number {
    return (min + max) / 2;
  }

  ngOnInit(): void {
    this.loadPlanes();
  }

  loadPlanes() {
    this.isLoading = true;

    this.supabaseStoreService
      .getPlanes()
      .pipe(
        catchError((error) => {
          this.handleError(error);
          throw error;
        })
      )
      .subscribe({
        next: (res: any) => {
          if (!res.error) {
            this.planes = res.data;
            this.isLoading = false;
          } else {
            this.handleError(res.error);
          }
        },
        error: (err: any) => {
          this.handleError(err);
        },
      });
  }
  handleError(error: any) {
    this.error = `There's been an error loading the data! If the problem persists, please contact the administrator.`;
    console.error(error);
    this.isLoading = false; //
  }
}
