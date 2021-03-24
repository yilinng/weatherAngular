import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Weather } from './models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private londonUrl: string = 'https://weather-angular.vercel.app/london/';

  private barcelonaUrl: string = 'https://weather-angular.vercel.app/barcelona/';

  private tokyoUrl: string = 'https://weather-angular.vercel.app/tokyo/';

  private testUrl: string = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/';

  private messageSource = new BehaviorSubject([]);

  currentMessage = this.messageSource.asObservable();

  constructor(
    private http: HttpClient,
    ) { }
      /** GET heroes from the server */

    getLondon(): Observable<Weather[]>{
     return this.http.get<Weather[]>(this.londonUrl);
    }

    getBarcelona(): Observable<Weather[]>{
     return this.http.get<Weather[]>(this.barcelonaUrl);
    }

    getTokyo(): Observable<Weather[]>{
     return this.http.get<Weather[]>(this.tokyoUrl);
    }

    getTest(){
     return this.http.get(this.testUrl);
    }

    changeMessage(message: any) {
    //this.messageSource.subscribe(console.log);
    this.messageSource.next(message);
     console.log(this.messageSource.value);
    }

}