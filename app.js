/* eslint-disable no-await-in-loop */
// eslint-disable-next-line no-unused-vars
import colors from 'colors';
import * as dotenv from 'dotenv';
import {
  pause,
  readInput,
  inquirerMenu,
  menuPlaceInfo,
  displayPlaces,
} from './helpers/index.js';
import { Searches } from './models/searches.js';

dotenv.config();

const main = async () => {
  const searches = new Searches();
  let opt = 0;

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1: {
        try {
          const cityToSearch = await readInput('City:');
          const placesResult = await searches.city(cityToSearch);
          const id = await displayPlaces(placesResult);
          const selectedPlace = placesResult.find(
            ({ id: resultId }) => resultId === id,
          );
          menuPlaceInfo(selectedPlace);
          // Weather
          // TODO: Weather //
        } catch (error) {
          throw new Error('There was an error');
        }
        break;
      }

      case 2:
        // TODO: Historical //
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
