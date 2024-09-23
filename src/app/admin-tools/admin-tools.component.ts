import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-admin-tools",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./admin-tools.component.html",
  styleUrl: "./admin-tools.component.css",
})
export class AdminToolsComponent {}
