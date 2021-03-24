import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service';
import { Weather } from './../../models/weather';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class MainComponent implements OnInit {

  //weather = this.weatherService.getWeather();
  weathers: any = [];
  filterWeathers: Weather[] = [];
  todayWeather: any = [];
  message: any = [];
  isLoading: boolean = false;
  totranf: boolean = true;
  //tranfArrays: Array<{max_temp: number, min_temp: number}> = [];

  constructor(
    private weatherService: WeatherService,
    ) { }

  ngOnInit(): void {
      this.getData();
      this.getSerice();
      this.isLoading = true;
       /*
      this.weatherService.currentMessage.subscribe( message => {
        if (message !== this.message) {
              //this.message = message;
              this.isLoading = true;
              this.getData();
            }

      });
       */
    }

    getData(){
      this.weatherService.getLondon()
      //.subscribe(data => this.weathers = (data as any).consolidated_weather);
      .subscribe((res) => {
          this.filterWeathers =
          (res as any).consolidated_weather.filter((v:any, i:number) =>i !== 0);
           this.todayWeather =
          (res as any).consolidated_weather.filter((v:any, i:number) =>i === 0);
    });
  }

  getSerice(){
     this.weatherService.currentMessage.subscribe((res) => {
     this.filterWeathers = (res as any).filter((v:any, i:number) =>i !== 0);
     this.todayWeather = (res as any).filter((v:any, i:number) =>i === 0);
   });

  }

 temperatureConverter() {
  this.totranf = !this.totranf;
  }

}
