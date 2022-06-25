export class WeatherData {
  id: string
  timestamp: string;
  temperature: string;
  isRain: string;
  stationId: string;

  constructor(id: string, timestamp: string, temperature: string, isRain: string, stationId: string) {
    this.id = id;
    this.timestamp = timestamp;
    this.temperature = temperature;
    this.isRain = isRain;
    this.stationId = stationId;
  }
}
