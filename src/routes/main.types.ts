export interface IWeatherResponse {
	country: string;
	localtime: string;
	name: string;
	lastUpdated: string;
	humidity: number;
	feelsLike: number;
	isDay: number;
	temperature: number;
	windSpeed: number;
	windDir: string;
	conditionIcon: string;
	conditionText: string;
}
