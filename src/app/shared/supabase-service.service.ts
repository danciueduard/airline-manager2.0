import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../../environments/environment.prod";
import { max } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey
  );
  supabaseService: any;
  selectedFile: any;

  async getAirportByICAO(icao) {
    let { data, error } = await this.supabase
      .from("airports")
      .select("*")
      .eq("icao", icao);

    return console.log(data);
  }

  async getPublicImgUrl(bucketName: string, imgName: string) {
    const { data } = this.supabase.storage
      .from(bucketName)
      .getPublicUrl(imgName);

    return data.publicUrl;
  }

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

  async removeImg(planeImg) {
    const { data, error } = await this.supabase.storage
      .from("img")
      .remove([`planeImg/${planeImg.name}`]);

    if (error) {
      console.log(error);
    }
  }

  async uploadPlane(formModel) {
    const { data, error } = await this.supabase
      .from("planes")
      .insert([
        {
          name: formModel.name,
          planeImg: formModel.planeImg,
          capacity: formModel.capacity,
          range: formModel.range,
          cost: formModel.cost,
          max_speed: formModel.max_speed,
          normal_speed: formModel.normal_speed,
          crew_capacity: formModel.crew_capacity,
          fuel_capacity: formModel.fuel_capacity,
          min_fuel_consumption: formModel.min_fuel_consumption,
          max_fuel_consumption: formModel.max_fuel_consumption,
        },
      ])
      .select();
    if (error) {
      return console.log(error);
    }
    console.log("upload complete");
  }
}
