import { Injectable } from "@angular/core";
import { SupabaseService } from "./supabase-client.service";
import { BehaviorSubject, Subject, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SupabaseAdminService {
  constructor(private supabaseClient: SupabaseService) {}

  getQualifications() {
    this.supabaseClient.getFromSupabase("qualifications", "*").subscribe();
  }
}
