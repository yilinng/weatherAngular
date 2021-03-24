export interface Weather {
  consolidated_weather: any,
  id: number,
  weather_state_name: string,
  min_temp: number,
  max_temp: number,
  the_temp: number,
  wind_speed: number,
  wind_direction: number,
  air_pressure: number,
  humidity: number,
  visibility: number,
  applicable_date: string,
}
