import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatestAll, from, Timestamp } from "rxjs";
import { SupabaseService } from "./supabase-client.service";

@Injectable({
  providedIn: "root",
})
export class PlayerRoutesService {
  private playerRoutesSubject = new BehaviorSubject<any>(null);
  public playerRoutes$ = this.playerRoutesSubject.asObservable();

  constructor(private supabaseClient: SupabaseService) {}

  getPlayerRoutes() {
    const currentData = this.playerRoutesSubject.getValue();
    if (currentData === null) {
      const data = this.supabaseClient.getFromSupabase(
        "player_created_routes",
        `
        id,
        created_at,
        airport1(icao, name, city, country, lat, lon),
        airport2(icao, name, city, country, lat, lon),
        departure_timestamp,
        arrival_timestamp,
        rating,
        planes (
          name, planeImg, capacity, range, max_speed
          ),
        route_name
          `
      );
      from(data).subscribe((res) => this.playerRoutesSubject.next(res.data));
    }
    return this.playerRoutes$;
  }

  addMinutesToTimestamp(minutes: number) {
    const currentTimestamp: number = Date.now();
    const millisecondsToAdd = minutes * 60 * 1000;
    const newTimestamp = currentTimestamp + millisecondsToAdd;
    return newTimestamp;
  }
}
