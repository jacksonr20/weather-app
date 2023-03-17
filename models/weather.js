import axios from 'axios';

class Weather {
  get paramWeather() {
    return {
      appid: process.env.OPEN_WEATHER_KEY,
      units: 'metric',
      lang: 'es'
    };
  }

  async weatherPlace(lat = '', lon = '') {
    try {
      const instace = axios.create({
        baseURL: process.env.OPEN_WEATHER_BASE_URL,
        params: { ...this.paramWeather, lat, lon }
      });

      const resp = await instace.get();
      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp
      };
    } catch (error) {
      console.log(error);
    }
  }
}

export { Weather };
