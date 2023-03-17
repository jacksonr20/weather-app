/* eslint-disable no-await-in-loop */
// eslint-disable-next-line no-unused-vars
import colors from 'colors';
import * as dotenv from 'dotenv';
import {
  pause,
  readInput,
  inquirerMenu,
  menuPlaceInfo,
  displayPlaces
} from './helpers/index.js';
import { Place } from './models/place.js';
import { Weather } from './models/weather.js';
import { Historical } from './models/historical.js';

dotenv.config();

const main = async () => {
  const places = new Place();
  const weather = new Weather();
  const historical = new Historical();

  let opt = 0;

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1: {
        try {
          const cityToSearch = await readInput('City:');
          const placesResult = await places.city(cityToSearch);
          const id = await displayPlaces(placesResult);

          if (id === 0) throw new Error('There was an error with this');

          const selectedPlace = placesResult.find(
            ({ id: resultId }) => resultId === id
          );

          historical.addHistorical(selectedPlace);

          const cityWeather = await weather.weatherPlace(
            selectedPlace.lat,
            selectedPlace.lng
          );

          menuPlaceInfo(selectedPlace, cityWeather);
        } catch (error) {
          throw new Error('There was an error');
        }
        break;
      }

      case 2:
        historical.readCity();

        historical.places.forEach((place, i) => {
          const id = `${i + 1}.`.green;
          console.log(`${id} ${place}`);
        });
        break;
      default:
        console.log('See you again!');
        break;
    }

    if (opt !== 0) {
      await pause();
    }
  } while (opt !== 0);
};

main();
