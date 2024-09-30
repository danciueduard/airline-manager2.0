import { Component, EventEmitter, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SlideMenuComponent } from "./slide-menu/slide-menu.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterModule, SlideMenuComponent, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  slideMenuOpen = false;
  openPopupMenu(event: Event) {
    event.stopPropagation();
  }

  openSlideMenu(event: Event) {
    event.stopPropagation();

    this.slideMenuOpen = true;
  }

  closeSlideMenu(event) {
    this.slideMenuOpen = event;
  }
}
