import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ModalService } from "../modal-service.service";

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
  modalOpen: boolean;

  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.dataService.goal.subscribe(res => (this.goals = res));
    this.goalCount = this.goals.length;
    this.dataService.updateGoals(this.goals);
    this.modalService.modalOpen.subscribe(res => (this.modalOpen = res));
  }

  submitForm() {
    this.goals.push(this.twoWayBinding);
    this.twoWayBinding = "";
    this.goalCount = this.goals.length;
    this.dataService.updateGoals(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.goalCount = this.goals.length;
    this.dataService.updateGoals(this.goals);
  }

  toggleModal() {
    this.modalService.toggleModal();
  }
}
