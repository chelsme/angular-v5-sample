import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { BodyComponent } from "./body/body.component";
import { AppRoutingModule } from ".//app-routing.module";
import { EasterEggComponent } from "./easter-egg/easter-egg.component";
import { DataService } from "./data.service";
import { ModalService } from "./modal-service.service";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BodyComponent,
    EasterEggComponent,
    ModalComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [DataService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
