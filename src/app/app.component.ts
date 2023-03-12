import { Component, Inject } from '@angular/core';
import {RaceService} from "./services/raceService";
import {RaceModel} from "./models/raceModel";
import { backendUrl } from './services/bakendUrl';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  ponies = new Map<number, RaceModel>();
  constructor(private raceService: RaceService, @Inject(backendUrl) private  url: string) 
 {
   console.log(this.url);


    this.ponies.set(103, { name: 'Rainbow Dash' });
    this.ponies.set(56, { name: 'Pinkie Pie' });
    this.ponies.set(57, { name: 'Ab Pie' });
  
  }
  title = 'ponyracer';
  list(): Array<RaceModel> {
    return this.raceService.list();
  }
  ponyComparator(a: KeyValue<number, RaceModel>, b: KeyValue<number, RaceModel>): -1 | 0 | 1 {
    if (a.value.name === b.value.name) {
      return 0;
    }
    return a.value.name < b.value.name ? -1 : 1;
  }
}
