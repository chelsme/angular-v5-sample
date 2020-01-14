import { Component, OnInit } from "@angular/core";
import { ModalService } from "../modal-service.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  toggleModal() {
    event.target.className === "modal-backdrop"
      ? this.modalService.toggleModal()
      : null;
  }

  selectColor(color) {
    this.modalService.color = color;
  }
}
