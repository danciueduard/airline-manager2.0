// src/app/supabase.service.ts
import { Injectable, OnInit } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
require("dotenv").config();

// Replace these with your actual Supabase project details
const SUPABASE_URL = "https://ihrpnwirjkzyheypcilz.supabase.co";
const SUPABASE_ANON_KEY = "";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  // Example function: Get data from a table
  async getData() {
    let { data, error } = await this.supabase
      .from("your-table-name")
      .select("*");

    if (error) {
      console.error("Error fetching data: ", error);
    }
    return data;
  }

  // Example function: Insert data into a table
  async insertData(newData: any) {
    let { data, error } = await this.supabase
      .from("your-table-name")
      .insert([newData]);

    if (error) {
      console.error("Error inserting data: ", error);
    }
    return data;
  }

  // Add more functions as needed
}
