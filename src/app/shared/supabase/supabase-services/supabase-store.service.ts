import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from } from "rxjs";
import { PlaneModel } from "../supabase-models/UploadPlanes.model";
import { SupabaseService } from "./supabase-client.service";
import { CrewModel } from "../../../content/shop/crew-shop/crew-card/Crew.model";

@Injectable({
  providedIn: "root",
})
export class SupabaseStoreService {
  constructor(private supabaseClientService: SupabaseService) {}

  ///////////////////////////////////////////////////////////////////////////////
  private planesStoreSubject = new BehaviorSubject<PlaneModel[] | null>(null);
  public planes$ = this.planesStoreSubject.asObservable();
  ///////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////
  private crewStoreSubject = new BehaviorSubject<any | null>(null);
  public crew$ = this.crewStoreSubject.asObservable();
  ///////////////////////////////////////////////////////////////////////////////

  getPlanes(): Observable<PlaneModel[]> {
    const currentData = this.planesStoreSubject.getValue();
    if (currentData === null) {
      const data = this.supabaseClientService.getFromSupabase("planes", "*");
      from(data).subscribe((res) => {
        this.planesStoreSubject.next(res);
      });
    }
    return this.planes$;
  }

  getCrew(): Observable<CrewModel[]> {
    const currentData = this.crewStoreSubject.getValue();
    if (currentData === null) {
      const data = this.supabaseClientService.getFromSupabase(
        "workers",
        `worker_id,name,role,gender,avatarUrl,hours_experience,age,workers_qualifications (qualification_id,
        qualifications (
            qualification_name,
            qualification_description,
            category,
            qualification_acronyms
            )
        )
           `
      );
      from(data).subscribe((res) => this.crewStoreSubject.next(res));
    }
    return this.crew$;
  }
}
