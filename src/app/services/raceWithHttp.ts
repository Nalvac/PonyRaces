import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaceModel } from '../models/raceModel';

@Injectable({
  providedIn: 'root'
})
export class RacesServiceWithHttp {

  constructor(private http: HttpClient) {

  }

  list(): Observable<Array<RaceModel>> {
    return this.http.get<Array<RaceModel>>('/api/races');
  }
}