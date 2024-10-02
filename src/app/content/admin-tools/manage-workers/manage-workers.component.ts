import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { WorkerModel } from "../../../shared/supabase/supabase-models/UploadWorkers.model";
import { SupabaseService } from "../../../shared/supabase/supabase-services/supabase-client.service";
import { CommonModule } from "@angular/common";
import { SupabaseAdminService } from "../../../shared/supabase/supabase-services/supabase-admin.service";

@Component({
  selector: "app-manage-workers",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./manage-workers.component.html",
  styleUrl: "./manage-workers.component.css",
})
export class ManageWorkersComponent implements OnInit {
  error: string;
  data = [];
  availableQualifications = [];
  addedQualifications = [];

  formModel: WorkerModel = {
    role: "",
    name: "",
    hours_experience: 0,
    gender: "",
    avatarUrl: "",
    age: 1,
  };

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.getFromSupabase("qualifications", "*").subscribe({
      next: (res) => {
        this.data = res.data;
        console.log(res.data);
      },
      error: (error) => (this.error = error),
    });
  }

  onSubmit() {
    this.formModel.avatarUrl = this.avatarUrlCreator(
      this.formModel.role,
      this.formModel.gender
    );
    this.supabaseService.uploadToDB("workers", this.formModel);
  }

  avatarUrlCreator(role: string, gender?: string) {
    if (role !== "engineer") {
      return `https://cnfbicxqeomybwsmissx.supabase.co/storage/v1/object/public/img/workerImg/${role}-${gender}.jpg`;
    } else
      return "https://cnfbicxqeomybwsmissx.supabase.co/storage/v1/object/public/img/workerImg/engineer.jpg";
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  addQualification(qualification: string) {
    this.availableQualifications = this.availableQualifications.filter(
      (item) => item !== qualification
    );
    this.addedQualifications.push(qualification);
  }

  removeQualification(qualification: string) {
    this.addedQualifications = this.addedQualifications.filter(
      (item) => item !== qualification
    );
    this.availableQualifications.push(qualification);
  }
  setCategory(category: string) {
    this.addedQualifications = [];
    this.availableQualifications = this.data.slice();
    if (category === "all") {
      return;
    }

    this.availableQualifications = this.availableQualifications.filter(
      (item) => item.category === category
    );
  }
}
