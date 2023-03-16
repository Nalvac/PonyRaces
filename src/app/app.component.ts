import { Component, Inject } from '@angular/core';
import {RaceService} from "./services/raceService";
import {RaceModel} from "./models/raceModel";
import { backendUrl } from './services/bakendUrl';
import { KeyValue } from '@angular/common';
import { FromNowPipe } from './pipes/fromNowPipe';
import { formatDistance, formatDistanceToNow, parseISO } from "date-fns";

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {


  ponies = new Map<number, RaceModel>();
  constructor(private raceService: RaceService, @Inject(backendUrl) private  url: string, private fromNowPipe: FromNowPipe) 
 {
   console.log(this.url);
   const b = parseISO('2023-03-15T12:00:00'); // affichera par exemple "in 10 months"

   console.log(formatDistanceToNow(b, {addSuffix: true}));

   console.log(this.fromNowPipe.transform('2023-03-15T12:00:00'));

    this.ponies.set(103, { name: 'Rainbow ash' });
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
