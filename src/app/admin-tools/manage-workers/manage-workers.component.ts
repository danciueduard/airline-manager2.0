import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-manage-workers",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./manage-workers.component.html",
  styleUrl: "./manage-workers.component.css",
})
export class ManageWorkersComponent {
  // Form model
  formModel = {
    role: "",
    name: "",
    skill: "",
    experience: 0,
    gender: "",
    avatarUrl: "",
  };

  // Form submission handler
  onSubmit() {
    console.log("Form submitted:", this.formModel);
    // Perform additional logic like calling a service
  }
}
