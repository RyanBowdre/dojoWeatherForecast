import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  burbank: string = "burbank";
  info: any = {humidity: "", description:"", temp:""};

  constructor(private _weatherService: WeatherService) { }


  ngOnInit() {
    console.log('wanted to get new weather');
    this._weatherService.getWeather(this.burbank)
    .subscribe((response)=>{
      console.log(response);
      this.info.humidity = response.main.humidity;
      this.info.description = response.weather[0].description;
      this.info.temp = response.main.temp;
      this.info.temp = Math.floor(this.info.temp * (9/5) - 459.67);
      this.info.maxTemp = response.main.temp_max;
      this.info.maxTemp = Math.floor(this.info.maxTemp * (9/5) - 459.67); 
      this.info.minTemp = response.main.temp_min;
      this.info.minTemp = Math.floor(this.info.minTemp * (9/5) - 459.67);

    }, (error)=>{
      console.log(error);
    })
  }

}
