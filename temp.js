const kelvin = 299; //Temperture in kelvin

let celsius = kelvin - 273; // The equation for celsius

var fahrenheit = celsius * (9/5) + 32; //equation is meant to work for fahrenheit

fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
