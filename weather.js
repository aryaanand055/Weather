class Weather {
    constructor() {
        this.apiKey = "791625824f5b43dfba770928211206";
    }
    async fetchCurrentWeather(place, aqiRequired = "no") {
        try {
            const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${place}&aqi=${aqiRequired}`);
            const res = await weatherResponse.json();
            if (res.error !== undefined) {
                return "No Location found";
            } else {
                return res;
            }
        } catch (err) {
            console.log(err);
        }
    }
}