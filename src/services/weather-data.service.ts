import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment.prod";
import {WeatherData} from "../entities/weather-data";

const API_URL = '/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public getWeatherDataForStationId(stationId: string): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(this.baseUrl + API_URL + '/' + stationId);
  }
}
