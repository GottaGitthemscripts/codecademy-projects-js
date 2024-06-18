// Sets the temp in Kelvin
const kelvin = 0;
// Convert to Celsius
const celsius = kelvin - 273;
// Newtons
let newton = celsius * (33/100);
// Rounds it down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newtons.`);

