import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncodeCardComponent } from "./components/encode-card/encode-card.component";
import { DecodeCardComponent } from "./components/decode-card/decode-card.component";
import { ButtonComponent } from './shared/button/button/button.component';
import { FormsModule } from "@angular/forms";
import { CardComponent } from "./shared/card/card.component";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EncodeCardComponent,
    DecodeCardComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextareaModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
