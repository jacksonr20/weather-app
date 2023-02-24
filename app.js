import colors from 'colors';
import * as dotenv from 'dotenv';
import { inquirerMenu } from './helpers/inquirer.js';
import { menuPlaceInfo } from './helpers/menu-info/menuInfo.js';
import { pause } from './helpers/pause/pause.js';
import { readInput } from './helpers/read-input/readInput.js';
import { displayPlaces } from './helpers/select-place/selectPlaces.js';
import { Searches } from './models/searches.js';

dotenv.config();

const main = async(  ) => {
    const searches = new Searches();
    let opt = 0;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const cityToSearch = await readInput('City:' ); 
                
                const placesResult = await searches.city( cityToSearch );
                
                const id = await displayPlaces( placesResult );
                const selectedPlace = placesResult.find( ({id}) =>  id === id );

                // Weather
                // TODO: Weather //
                
                menuPlaceInfo( selectedPlace );
                break;
                
                default:
                    console.log('See you again!');
                break;
            case 2:
                // TODO: Historical //
                break
        }

        if ( opt !== 0 ) {
            await pause();
        } 
            
    } while (opt !== 0);
}

main();