import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']

})
export class HumidityComponent implements OnInit {

  private _weather: any;
  finalWidth: number = 0;
  @Input()
  get weather(): any {
    return this._weather
  };

  set weather(value: any) {
      this._weather = value;
      this.testItem();
  };
  constructor() { }

  ngOnInit(): void {
      //console.log(this.styleMutation());
  }
  styleMutation(){
   const styles = this._weather.humidity*2;

    return styles;
  }

  testItem(){
   this.finalWidth = this._weather.humidity*2;
  }
}
