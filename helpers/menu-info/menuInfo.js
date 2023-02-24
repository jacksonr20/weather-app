const menuPlaceInfo = ({ name, lat, lng }) => {
    console.log('\nInfo of the city\n'.bold);
    console.log(`City: `.gray, name);
    console.log(`Lat: `.cyan, lat);
    console.log(`Lng: `.green, lng);
    console.log(`Temperature: `.magenta);
    console.log(`Min: `.red,);
    console.log(`Max: `.blue,);
}

export { menuPlaceInfo }