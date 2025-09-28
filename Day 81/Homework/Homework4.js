import { greet } from './greet.js';
import { getWeather } from './getweather.js';


const message = greet("Giorgi");
console.log(message);  

const currentHour = 15;
const weather = getWeather(currentHour);
console.log(`Weather at ${currentHour}:00 is ${weather}`); 