import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Station} from "../../entities/station";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {WeatherDataService} from "../../services/weather-data.service";
import {map} from "rxjs";
import {WeatherData} from "../../entities/weather-data";

@Component({
  selector: 'app-station',
  templateUrl: './station-weather.component.html',
  styleUrls: ['./station-weather.component.css']
})
export class StationWeatherComponent implements OnInit {
  title = 'meteo-frontend';
  stationData: Station;
  weatherData: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private weatherDataService: WeatherDataService,
              private db: AngularFireDatabase) {
    this.stationData = data.stationData;
    this.weatherData = [];
  }

  ngOnInit() {
    this.retrieveMeasurements();
  }

  private retrieveMeasurements() {
    this.weatherDataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
            console.log(c);
            ({key: c.payload.key, ...c.payload.val()})
        })
      )
    ).subscribe(data => {
      console.log(data);
      this.weatherData = data;
    });
  }
}
