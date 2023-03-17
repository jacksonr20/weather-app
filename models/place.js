/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from 'axios';

class Place {
  get paramMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      language: 'es',
      limit: 2
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
}

export { Place };
