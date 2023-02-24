import colors from 'colors';
import * as dotenv from 'dotenv';
import { inquirerMenu } from './helpers/inquirer.js';
import { pause } from './helpers/pause/pause.js';
import { readInput } from './helpers/read-input/readInput.js';
import { Searches } from './models/searches.js';

dotenv.config();

const main = async(  ) => {
    const searches = new Searches();
    let opt = 0;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Show message
                const place = await readInput('City:' ); 
                searches.city( place );


                // Find places

                // Select place

                // Weather

                // Show results

                break;
        
            default:
                break;
        }

        if ( opt !== 0 ) {
            await pause();
        } 
            
    } while (opt !== 0);



}

main();