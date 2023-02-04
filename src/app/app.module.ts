import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardComponent} from "./shared/card/card.component";
import {EncodeCardComponent} from "./components/encode-card/encode-card.component";
import {DecodeCardComponent} from "./components/decode-card/decode-card.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EncodeCardComponent,
    DecodeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
