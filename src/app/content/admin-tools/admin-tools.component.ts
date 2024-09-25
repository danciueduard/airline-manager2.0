import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PopupMenuComponent } from "../../shared/components/popup-menu/popup-menu.component";

@Component({
  selector: "app-admin-tools",
  standalone: true,
  imports: [CommonModule, RouterModule, PopupMenuComponent],
  templateUrl: "./admin-tools.component.html",
  styleUrl: "./admin-tools.component.css",
})
export class AdminToolsComponent {}
