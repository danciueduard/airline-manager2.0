import { Component, PLATFORM_INITIALIZER } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PlaneModel } from "../../../shared/supabase/supabase-models/UploadPlanes.model";
import { SupabaseService } from "../../../shared/supabase/supabase-services/supabase-client.service";

@Component({
  selector: "app-add-planes",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./manage-planes.component.html",
  styleUrl: "./manage-planes.component.css",
})
export class ManagePlanesComponent {
  selectedFile: File | null = null;
  publicImgUrl: string | null = null;
  constructor(private supabaseService: SupabaseService) {}

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  formModel: PlaneModel = {
    name: "",
    planeImg: "",
    capacity: 0,
    range: 0,
    cost: 0,
    max_speed: 0,
    normal_speed: 0,
    crew_capacity: 0,
    fuel_capacity: 0,
    min_fuel_consumption: 0,
    max_fuel_consumption: 0,
  };

  // Handle form submission AFTER the image has been uploaded
  async onSubmit() {
    await this.uploadImage();
    this.formModel.planeImg = this.publicImgUrl;
    if (!this.formModel.planeImg) return console.error("no publicUrl found");
    this.supabaseService.uploadToDB("planes", this.formModel);
  }

  // Handle image submission
  uploadImage() {
    this.supabaseService.uploadImg(this.selectedFile);
    const planeURL = this.supabaseService.getPublicImgUrl(
      "img/planeImg",
      this.selectedFile.name
    );
    planeURL.then((value) => {
      this.publicImgUrl = value;
    });
  }
}
