import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }
  getWeather(weatherObject) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+weatherObject+"&&appid=48cfb9fd41142babb8cbe9b0c8e7234f").map(Response=>Response.json());
  }
}
