import { Component } from "@angular/core";
import { PopupMenuComponent } from "../../shared/components/popup-menu/popup-menu.component";
import { CommonModule } from "@angular/common";
import { AirplaneShopComponent } from "./airplane-shop/airplane-shop.component";
import { RouterModule } from "@angular/router";

interface Airplane {
  name: string;
  price: number;
}

interface Worker {
  name: string;
  salary: number;
}

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
export class ShopComponent {}
