import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

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

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.goal.subscribe(res => (this.goals = res));
    this.goalCount = this.goals.length;
    this.data.updateGoals(this.goals);
  }

  submitForm() {
    this.goals.push(this.twoWayBinding);
    this.twoWayBinding = "";
    this.goalCount = this.goals.length;
    this.data.updateGoals(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.goalCount = this.goals.length;
    this.data.updateGoals(this.goals);
  }
}
