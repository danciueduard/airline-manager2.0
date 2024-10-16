import { AfterContentInit, Component, OnInit } from "@angular/core";
import { CrewCardComponent } from "./crew-card/crew-card.component";
import { SupabaseStoreService } from "../../../shared/supabase/supabase-services/supabase-store.service";
import { CommonModule } from "@angular/common";
import { CrewModel } from "./crew-card/Crew.model";
import { ActivatedRoute, RouterModule, Params } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-crew-shop",
  standalone: true,
  imports: [CommonModule, CrewCardComponent, RouterModule],
  templateUrl: "./crew-shop.component.html",
  styleUrls: ["./crew-shop.component.css"],
})
export class CrewShopComponent implements OnInit {
  filteredCrew: CrewModel[] | null = [];
  error: string = "";
  isLoading: boolean = true;
  currentTab: string = "";
  routeSub!: Subscription;

  constructor(
    private supabaseStoreService: SupabaseStoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.loadCrew();
    });
  }

  loadCrew() {
    this.isLoading = true;

    this.supabaseStoreService
      .getCrew()
      .pipe(
        catchError((error) => {
          this.handleError(error);
          throw error;
        })
      )
      .subscribe({
        next: (res: any) => {
          if (!res.error) {
            this.setCurrentTab(res.data);
            this.isLoading = false;
          } else {
            this.handleError(res.error);
          }
        },
      });
  }

  setCurrentTab(data: CrewModel[]) {
    const currentRoute = this.activatedRoute.snapshot.routeConfig?.path;
    switch (currentRoute) {
      case "pilots":
        this.filteredCrew = data.filter((item) => item.role === "pilot");
        break;
      case "cabin-crew":
        this.filteredCrew = data.filter((item) => item.role === "cabin-crew");
        break;
      case "engineers":
        this.filteredCrew = data.filter((item) => item.role === "engineer");
        break;
      default:
        this.filteredCrew = data; // Default to showing all crew if no specific tab
    }
  }

  handleError(error: any) {
    this.error = `There's been an error loading the data! If the problem persists, please contact the administrator.`;
    console.error(error);
    this.isLoading = false; // Stop loading on error
  }

  ngOnDestroy(): void {
    // Unsubscribe from the route changes to avoid memory leaks
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
