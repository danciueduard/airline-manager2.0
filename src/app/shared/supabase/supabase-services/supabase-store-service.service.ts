import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, from } from "rxjs";
import { PlaneModel } from "../supabase-models/UploadPlanes.model";
import { SupabaseService } from "./supabase-client.service";

@Injectable({
  providedIn: "root",
})
export class SupabaseStoreService {
  constructor(private supabaseClientService: SupabaseService) {}

  private planesStoreSubject = new BehaviorSubject<PlaneModel[] | null>(null);
  public planes$ = this.planesStoreSubject.asObservable();
  ///////////////////////////////////////////////////////////////////////////////
  private crewStoreSubject = new BehaviorSubject<any | null>(null);
  public crew$ = this.crewStoreSubject.asObservable();

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

  getCrew(): Observable<any> {
    const currentData = this.crewStoreSubject.getValue();
    if (currentData === null) {
      const data = this.supabaseClientService.getFromSupabase("workers", "*");
      from(data).subscribe((res) => {
        this.crewStoreSubject.next(res);
      });
    }
    return this.crew$;
  }
}