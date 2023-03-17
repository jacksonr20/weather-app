/* eslint-disable no-console */
const menuPlaceInfo = (
  { name, lat, lng },
  {
    temp, min, max, desc
  }
) => {
  console.log('\nInfo of the city\n'.bold);
  console.log('City: '.gray, name);
  console.log('Lat: '.cyan, lat);
  console.log('Lng: '.green, lng);
  console.log('Temperature: '.magenta, temp);
  console.log('Min: '.red, min);
  console.log('Max: '.blue, max);
  console.log('How is the weather?: '.rainbow, desc);
};

export { menuPlaceInfo };
