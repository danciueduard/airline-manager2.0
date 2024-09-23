import { Component, PLATFORM_INITIALIZER } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SupabaseService } from "../../shared/supabase-service.service";

@Component({
  selector: "app-add-planes",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./add-planes.component.html",
  styleUrl: "./add-planes.component.css",
})
export class AddPlanesComponent {
  selectedFile: File | null = null;
  constructor(private supabaseService: SupabaseService) {}

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  formModel = {
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

  // Handle form submission
  onSubmit() {
    this.uploadImage();
    // console.log(this.formModel);
    this.supabaseService.uploadPlane(this.formModel);
  }

  uploadImage() {
    this.supabaseService.uploadImg(this.selectedFile);
    const planeURL = this.supabaseService.getPublicImgUrl(
      "img",
      this.selectedFile.name
    );
    planeURL.then((value) => {
      this.formModel.planeImg = value;
    });
  }
}
