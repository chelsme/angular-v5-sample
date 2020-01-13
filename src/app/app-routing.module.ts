import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { BodyComponent } from "./body/body.component";
import { EasterEggComponent } from "./easter-egg/easter-egg.component";

const routes: Routes = [
  {
    path: "",
    component: BodyComponent
  },
  {
    path: "ee/:thisIsMyParam",
    component: EasterEggComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
