import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SupabaseService } from "../../shared/supabase/supabase-service.service";
import { UploadWorkersModel } from "../../shared/supabase/supabase-models/UploadWorkers.model";

@Component({
  selector: "app-manage-workers",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./manage-workers.component.html",
  styleUrl: "./manage-workers.component.css",
})
export class ManageWorkersComponent {
  formModel: UploadWorkersModel = {
    role: "",
    name: "",
    hours_experience: 0,
    gender: "",
    avatarUrl: "",
  };

  constructor(private supabaseService: SupabaseService) {}

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
}
