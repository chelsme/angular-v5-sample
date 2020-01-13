import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-easter-egg",
  templateUrl: "./easter-egg.component.html",
  styleUrls: ["./easter-egg.component.css"]
})
export class EasterEggComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.thisIsMyParam));
  }

  ngOnInit() {}

  sendMeHome() {
    this.router.navigate([""]);
  }
}
