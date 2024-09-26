import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../../../environments/environment.prod";
import { BehaviorSubject, Observable, from } from "rxjs";
import { AddPlanesModel } from "../../content/admin-tools/manage-planes/AddPlanes.model";
import { PlaneModel } from "./supabase-models/UploadPlanes.model";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey
  );
  // I have used a BehaviorSubject to avoid useless re-fetching when accessing the store tabs
  private planesStoreSubject = new BehaviorSubject<PlaneModel[] | null>(null);
  public planes$ = this.planesStoreSubject.asObservable();

  getFromSupabase(table: string, columns: string): Observable<any> {
    const data = this.supabase.from(table).select(columns);
    return from(data);
  }

  getPlanes(): Observable<PlaneModel[]> {
    const currentData = this.planesStoreSubject.getValue();

    if (currentData === null) {
      const query = this.supabase.from("planes").select("*");
      from(query).subscribe((res) => {
        this.planesStoreSubject.next(res as unknown as PlaneModel[]);
      });
    }
    return this.planes$;
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
