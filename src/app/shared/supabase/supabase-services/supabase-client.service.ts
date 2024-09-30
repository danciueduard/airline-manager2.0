import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { BehaviorSubject, Observable, from } from "rxjs";
import { PlaneModel } from "../supabase-models/UploadPlanes.model";
import { environment } from "../../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  from(arg0: string) {
    throw new Error("Method not implemented.");
  }
  supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey
  );

  getFromSupabase(table: string, columns: string): Observable<any> {
    const data = this.supabase.from(table).select(columns);
    return from(data);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Img upload + get url
  async uploadImg(planeImg) {
    const { data, error } = await this.supabase.storage
      .from("img")
      .upload(`planeImg/${planeImg.name}`, planeImg, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log(error);
    }
  }

  async getPublicImgUrl(bucketName: string, imgName: string) {
    const { data } = this.supabase.storage
      .from(bucketName)
      .getPublicUrl(imgName);

    return data.publicUrl;
  }

  ///////////////////////////////////////////////////////////////////////////////
  // Upload to DB
  async uploadToDB(table: string, payload: {}) {
    const { data, error } = await this.supabase
      .from(table)
      .insert([payload])
      .select();
    if (error) {
      console.log(error);
    } else console.log("upload complete");
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
