import { CommonModule } from "@angular/common";
import { Component, Input, OnChanges } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.css"],
  imports: [CommonModule],
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0; // Input to receive the rating from parent
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges() {
    this.calculateStars();
  }

  calculateStars() {
    const fullStarsCount = Math.floor(this.rating); // Get number of full stars
    const hasHalfStar = this.rating % 1 !== 0; // Check if we have a half star
    const emptyStarsCount = 5 - fullStarsCount - (hasHalfStar ? 1 : 0); // Remaining empty stars

    // Populate arrays to loop through in template
    this.fullStars = Array(fullStarsCount).fill(0);
    this.halfStar = hasHalfStar;
    this.emptyStars = Array(emptyStarsCount).fill(0);
  }
}
