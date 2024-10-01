import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CrewModel } from "./Crew.model";

@Component({
  selector: "app-crew-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./crew-card.component.html",
  styleUrl: "./crew-card.component.css",
})
export class CrewCardComponent {
  @Input() data: CrewModel;
}
