import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PoniesComponent} from "./ponies/ponies.component";
import {ApiService} from "./services/apiService";
import {RaceService} from "./services/raceService";

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ApiService,
    RaceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
