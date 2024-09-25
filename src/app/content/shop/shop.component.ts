import { Component } from "@angular/core";
import { PopupMenuComponent } from "../../shared/components/popup-menu/popup-menu.component";
import { CommonModule } from "@angular/common";

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
  imports: [PopupMenuComponent, CommonModule],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  // User balance and owned items
  balance: number = 100000; // Example starting balance
  ownedAirplanes: number = 0;
  hiredWorkers: number = 0;

  // Airplanes and workers available for purchase/hire
  airplanes: Airplane[] = [
    { name: "Boeing 747", price: 50000 },
    { name: "Airbus A380", price: 75000 },
    { name: "Cessna 172", price: 20000 },
  ];

  workers: Worker[] = [
    { name: "Pilot", salary: 5000 },
    { name: "Mechanic", salary: 3000 },
    { name: "Ground Crew", salary: 2000 },
  ];

  // Method to buy an airplane
  buyAirplane(airplane: Airplane) {
    if (this.balance >= airplane.price) {
      this.balance -= airplane.price;
      this.ownedAirplanes++;
    }
  }

  // Method to hire a worker
  hireWorker(worker: Worker) {
    if (this.balance >= worker.salary) {
      this.balance -= worker.salary;
      this.hiredWorkers++;
    }
  }
}
