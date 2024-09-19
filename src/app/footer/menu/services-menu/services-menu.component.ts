import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { StarRatingComponent } from "../../../shared/components/star-rating/star-rating.component";

@Component({
  selector: "app-services-menu",
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: "./services-menu.component.html",
  styleUrls: ["./services-menu.component.css"], // Correct to styleUrls (with 's')
})
export class ServicesMenuComponent implements OnInit, AfterViewInit {
  @ViewChild("gasTruckImageContainer") gasTruckImageContainer!: ElementRef;

  discount: number = 25;
  fuelRating: number = 3.5;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.gasTruckImageContainer);
    this.modifyDiscount(this.discount);
  }

  modifyDiscount(discount: number) {
    const style = this.renderer.createElement("style");
    const css = `
    .pic-container::after {
        display: flex;
        align-items: center; /* Fixed the typo */
        justify-content: end;
        content: "-${discount}%"; 
        white-space: pre;
        height: 65px;
        width: 100px;
        position: absolute;
        bottom: -15px;
        right: 0px;
        background-color: black;
        color: white;
        padding: 5px 10px;
        font-size: 18px;
        font-weight: bold;
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 10% 100%, 0% 100%);
        z-index: 2000;
      }
    .discount::after {
        position: absolute;
        width: 70px;
        top: 7px;
        right: -20px;
        content: "-${discount}%"; 
        background-color: rgb(0, 0, 0);
        color: white;
        font-size: 12px;
        transform: rotate(45deg);
      }

      
    `;
    this.renderer.setProperty(style, "textContent", css);
    this.renderer.appendChild(document.head, style);
  }

  modifyDiscountButton() {}
}
