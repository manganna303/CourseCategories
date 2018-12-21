import { Component, OnInit } from "@angular/core";
import { ICategories } from "./categories.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CourseCategories";
  categories: ICategories[] = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Spring" },
    { id: 3, name: "Java" }
  ];
  ngOnInit(): void {}
}
