import { Component, OnInit, ViewChild } from "@angular/core";
import { Form, FormsModule, NgForm } from "@angular/forms";
import { WorkerModel } from "../../../shared/supabase/supabase-models/UploadWorkers.model";
import { SupabaseService } from "../../../shared/supabase/supabase-services/supabase-client.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-manage-workers",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./manage-workers.component.html",
  styleUrl: "./manage-workers.component.css",
})
export class ManageWorkersComponent implements OnInit {
  onSubmitMessage: string = "Upload Success!";
  error: string;
  data = [{}];
  availableQualifications = [];
  addedQualifications = [];

  formModel: WorkerModel = {
    worker_id: null,
    role: "",
    name: "",
    hours_experience: 0,
    gender: "",
    avatarUrl: "",
    age: null,
  };

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.getQualifications();
  }

  async onSubmit(form: NgForm) {
    const workerId = Date.now();
    const qualifications = [];
    this.formModel.avatarUrl = this.avatarUrlCreator(
      this.formModel.role,
      this.formModel.gender
    );
    this.formModel.worker_id = workerId;
    // console.log(this.formModel);
    for (let qualification of this.addedQualifications) {
      qualifications.push({
        worker_id: workerId,
        qualification_id: qualification.id,
      });
    }

    this.supabaseService.uploadToDB("workers", [this.formModel]).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
    this.supabaseService
      .uploadToDB("workers_qualifications", [...qualifications])
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
    form.reset();
    this.setCategory("none");
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
    if (category === "none") {
      this.availableQualifications = [];
      this.addedQualifications = [];
    }
    this.availableQualifications = this.availableQualifications.filter(
      (item) => item.category === category
    );
    console.log(this.extractQualificationNames(this.availableQualifications));
  }

  extractQualificationNames(qualificationsArray) {
    return qualificationsArray
      .map((qualification) => qualification.qualification_name) // Extract qualification_name
      .join(", "); // Join them into a string separated by commas
  }

  getQualifications() {
    this.supabaseService.getFromSupabase("qualifications", "*").subscribe({
      next: (res) => (this.data = res.data),
      error: (err) => console.log(err),
    });
  }
}
