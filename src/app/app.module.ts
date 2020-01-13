import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, BodyComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
