import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-slide-menu",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./slide-menu.component.html",
  styleUrl: "./slide-menu.component.css",
})
export class SlideMenuComponent {
  @Output() closeMenu: EventEmitter<Boolean | null> = new EventEmitter(null);
  @Input() isOpen: Boolean = false;

  handleCloseMenu() {
    this.closeMenu.emit(false);
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event"])
  handleClickOutside(event: Event) {
    const clickInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickInside) {
      this.handleCloseMenu();
    }
  }
}
