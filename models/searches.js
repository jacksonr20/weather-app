import axios from "axios";

class Searches {
    historical = ['Maracaibo', 'Medellin', 'San Jose'];
    
    constructor(){
        // TODO: Read DB //
    }

    get paramMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'language': 'es',
            'limit': 2,
        }
    }

    async city( place = '' ) {
        console.clear();
        try {
            // HTTP Request;
            const url = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramMapBox,
            });

            const res = await url.get();
            console.log(res.data);

            return []; // Return places
        } catch (error) {
            console.log('\nThere was an error trying to get that request\n');
            return [];
        }

    }
}

export { Searches }