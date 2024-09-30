import { Component, ElementRef, HostListener, Input } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-popup-menu",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./popup-menu.component.html",
  styleUrl: "./popup-menu.component.css",
})
export class PopupMenuComponent {
  constructor(private router: Router, private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event"])
  handleClickOutside(event: Event) {
    const clickInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickInside) {
      // this.closeMenu();
    }
  }
  closeMenu() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
