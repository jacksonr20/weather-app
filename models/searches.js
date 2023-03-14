/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from 'axios';
class Searches {
  constructor() {
    // TODO: Read DB //
  }

  get paramMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      language: 'es',
      limit: 2
    };
  }

  get paramWeather() {
    return {
      appid: process.env.OPEN_WEATHER_KEY,
      units: 'metric',
      lang: 'es'
    };
  }

  async city(place = '') {
    try {
      const url = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramMapBox
      });

      const res = await url.get();
      return res.data.features.map(({ id, place_name, center }) => ({
        id,
        name: place_name,
        lng: center[0],
        lat: center[1]
      }));
    } catch (error) {
      console.log('\nThere was an error trying to get that request\n');
      return [];
    }
  }

  async weatherPlace(lat, lon) {
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

export { Searches };
