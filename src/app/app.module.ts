import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { BodyComponent } from "./body/body.component";
import { AppRoutingModule } from './/app-routing.module';
import { EasterEggComponent } from './easter-egg/easter-egg.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, BodyComponent, EasterEggComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
