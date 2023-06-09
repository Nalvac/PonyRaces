import {Component} from "@angular/core";

export { Component } from '@angular/core';

@Component({
  selector: 'ns-ponies',
  template: `
    <button (click)="refreshPonies()">Refresh</button>
    <ul>
      <li *ngFor="let pony of ponies; even as isEven" [style.color]="isEven ? 'green' : 'black'">
        {{ pony.name }}
      </li>
    </ul>
  `
})
export class PoniesComponent {
  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

  refreshPonies(): void {
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
  }
}
