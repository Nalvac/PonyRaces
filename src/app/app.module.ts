import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FromNowPipe } from './pipes/fromNowPipe';
import {PoniesComponent} from "./ponies/ponies.component";
import {ApiService} from "./services/apiService";
import { backendUrl } from './services/bakendUrl';
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
    FromNowPipe,
    ApiService,
    {provide: RaceService, useClass: RaceService},
    {provide: backendUrl, useValue: 'http://localhost:8080'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
