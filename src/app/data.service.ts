import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>([
    "default first item",
    "starter second item"
  ]);
  goal = this.goals.asObservable();

  constructor() {}

  updateGoals(goal) {
    this.goals.next(goal);
  }
}
