import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ModalService {
  public modalOpen = new BehaviorSubject<boolean>(false);
  color: string;

  constructor() {}

  toggleModal() {
    this.modalOpen.next(!this.modalOpen.value);
  }
}
