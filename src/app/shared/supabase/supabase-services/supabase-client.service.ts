import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { BehaviorSubject, Observable, from } from "rxjs";
import { PlaneModel } from "../supabase-models/UploadPlanes.model";
import { environment } from "../../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey
  );

  getFromSupabase(table: string, columns: string): Observable<any> {
    const dataPromise = this.supabase.from(table).select(columns);
    return from(dataPromise);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Img upload + get url
  uploadImg(planeImg): Observable<any> {
    const dataPromise = this.supabase.storage
      .from("img")
      .upload(`planeImg/${planeImg.name}`, planeImg, {
        cacheControl: "3600",
        upsert: false,
      });
    return from(dataPromise);
  }

  getPublicImgUrl(bucketName: string, imgName: string): Observable<any> {
    const dataPromise: any = this.supabase.storage
      .from(bucketName)
      .getPublicUrl(imgName);

    return from(dataPromise);
  }

  ///////////////////////////////////////////////////////////////////////////////
  // Upload to DB
  uploadToDB(table: string, payload: {}): Observable<any> {
    const dataPromise = this.supabase.from(table).insert(payload).select();

    return from(dataPromise);
  }
  /////////////////////////////////////////////////////////////////////////////////
  async getAirportByICAO(icao) {
    let { data, error } = await this.supabase
      .from("airports")
      .select("*")
      .eq("icao", icao);

    return console.log(data);
  }
}
