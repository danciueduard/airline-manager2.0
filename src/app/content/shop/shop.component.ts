import { Component, ElementRef, HostListener } from "@angular/core";
import { PopupMenuComponent } from "../../shared/components/popup-menu/popup-menu.component";
import { CommonModule } from "@angular/common";
import { AirplaneShopComponent } from "./airplane-shop/airplane-shop.component";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-shop",
  standalone: true,
  imports: [
    PopupMenuComponent,
    CommonModule,
    AirplaneShopComponent,
    RouterModule,
  ],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
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
