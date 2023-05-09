import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  images = [
    "https://via.placeholder.com/800x400/FF0000/FFFFFF",
    "https://via.placeholder.com/800x400/00FF00/FFFFFF",
    "https://via.placeholder.com/800x400/0000FF/FFFFFF",
  ];
}
