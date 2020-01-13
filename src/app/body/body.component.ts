import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  value = "one way binding";
  twoWayBinding = "two way binding";
  goalCount: number;
  goals = [];

  constructor() {}

  ngOnInit() {
    this.goalCount = this.goals.length;
  }

  submitForm() {
    this.goals.push(this.twoWayBinding);
    this.twoWayBinding = "";
    this.goalCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
  }
}
