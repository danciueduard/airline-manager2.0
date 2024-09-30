import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from } from "rxjs";
import { PlaneModel } from "../supabase-models/UploadPlanes.model";
import { SupabaseService } from "./supabase-client.service";

@Injectable({
  providedIn: "root",
})
export class SupabaseStoreService {
  constructor(private supabaseClientService: SupabaseService) {}

  // I have used a BehaviorSubject to avoid useless re-fetching when accessing the store tabs
  private planesStoreSubject = new BehaviorSubject<PlaneModel[] | null>(null);
  public planes$ = this.planesStoreSubject.asObservable();

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
}
