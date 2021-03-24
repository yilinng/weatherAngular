import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Weather } from './../../models/weather';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  todayWeather: any = [];
  location : string = "";
  showBar: boolean = false;
  inputName: any = [];
  searchItem :any = [];
  findSearch: any = [];
  weathersSelected:any = [];
  clickItem: any = [];
  message:any = [];

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder,
    private http: HttpClient,

    ) { }

   ngOnInit(): void {
      this.getData();

      //this.weatherService.getTest().subscribe((res) => console.log(res));

      this.weatherService.currentMessage.subscribe(message => this.message = message);

      this.weathersSelected = [
        {
          location: 'London',
          woeid: 44418,
          clicked: true
        },
        {
          location: 'Barcelona',
          woeid: 753692,
          clicked: false
        },
        {
          location: 'Tokyo',
          woeid: 1118370,
          clicked: false
        }
      ]
    }

    getData(){
      if (this.clickItem.woeid === 1118370) {
          this.weatherService.getTokyo()
            //.subscribe(data => this.weathers = (data as any).consolidated_weather);
            .subscribe((res) => {
                this.todayWeather =
                (res as any).consolidated_weather.filter((v:any, i:number) =>i === 0);
                this.location = (res as any).title;
                this.weatherService.changeMessage((res as any).consolidated_weather);
            });

      }else if(this.clickItem.woeid === 753692){
         this.weatherService.getBarcelona()
            .subscribe((res) => {
                this.todayWeather =
                (res as any).consolidated_weather.filter((v:any, i:number) =>i === 0);
                this.location = (res as any).title;
                this.weatherService.changeMessage((res as any).consolidated_weather);
            });

      }else if(this.clickItem.woeid === 44418){
             this.weatherService.getLondon()
            .subscribe((res) => {
                this.todayWeather =
                (res as any).consolidated_weather.filter((v:any, i:number) =>i === 0);
                this.location = (res as any).title;
                this.weatherService.changeMessage((res as any).consolidated_weather);
            });

      }else{
             this.weatherService.getLondon()
            .subscribe((res) => {
                this.todayWeather =
                (res as any).consolidated_weather.filter((v:any, i:number) =>i === 0);
                this.location = (res as any).title;
                this.weatherService.changeMessage((res as any).consolidated_weather);
            });
      }
  }
  showSearch(){
    this.showBar = true;
  }

  closeBar(){
    this.showBar = false;
  }

  onSearch() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query='+this.inputName)
    .subscribe((data) => this.searchFind(data));
    //this.searchFind(this.searchItem);
  }

  searchFind(item: any){

     this.http.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'+item[0].woeid)
    .subscribe((res) =>{
                this.todayWeather =
                (res as any).consolidated_weather.filter((v:any, i:number) =>i === 0);
                this.location = (res as any).title;
                this.weatherService.changeMessage((res as any).consolidated_weather);
            });
  }

  clickThis(item:any){

    this.weathersSelected.map((v:any, i:number) => {
      if (v.woeid === item.woeid) {
          v.clicked = true;
          this.clickItem = v;
      }else{
          v.clicked = false;
      }
    });

    this.getData();
    //console.log(this.clickItem);
    //this.weatherService.changeMessage(item.location);
  }

  deleteClick(id:number){
    this.weathersSelected = this.weathersSelected.filter((v:any, i:number) => i !== id);
  }


}
