import { Component } from '@angular/core';
import {RaceService} from "./services/raceService";
import {RaceModel} from "./models/raceModel";

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private raceService: RaceService) {
  }
  title = 'ponyracer';
  list(): Array<RaceModel> {
    return this.raceService.list();
  }
}
