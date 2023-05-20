const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26ae800c58mshc484febbd4820fbp15209djsnea390f0cd178',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const getWeatherFrom = async (query: string = '') => {
	if (query.length > 5) {
		const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;

		const res = await fetch(url, FETCH_OPTIONS);
		const data = await res.json();
		const { location, current } = data;

		return {
			country: location.country,
			localtime: location.localtime,
			name: location.name,
			lastUpdated: current.last_updated,
			humidity: current.humidity,
			feelsLike: current.feelslike_c,
			isDay: current.is_day,
			temperature: current.temp_c,
			windSpeed: current.wind_kph,
			windDir: current.wind_dir,
			conditionIcon: current.condition.icon,
			conditionText: current.condition.text
		};
	} else {
		return null;
	}
};
