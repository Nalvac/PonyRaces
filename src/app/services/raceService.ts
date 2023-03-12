import {ApiService} from "./apiService";
import {Injectable} from "@angular/core";
import { RaceModel } from "../models/raceModel";

@Injectable()
export class RaceService {
  constructor(private apiService: ApiService) {}

  list(): Array<RaceModel> {
    return this.apiService.get('/races');
  }
}
