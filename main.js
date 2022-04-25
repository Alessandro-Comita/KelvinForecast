// // var myName = 'Alex';

// // var myName = 'John';

// // console.log(myName);


// // var myWeight = 180;

// // myWeight += 20;

// // console.log(myWeight);

// // Math Method


// console.log(Math.min(4, 22, 1, 2222, 22));

// console.log(Math.max(22, 22, 11, 11, 555, 555, 23, 23,));

// console.log(Math.floor(2.22));
// console.log(Math.floor(2.44));
// console.log(Math.floor(2.66));
// console.log(Math.floor(2.99));


// console.log(Math.ceil(2.22));
// console.log(Math.ceil(2.44));
// console.log(Math.ceil(2.66));
// console.log(Math.ceil(2.99));

// console.log(Math.round(2.22));
// console.log(Math.round(2.44));
// console.log(Math.round(2.66));
// console.log(Math.round(2.99));



// console.log(Math.floor(Math.random()*200));


// PROJECT 1


// today forecast
const Kelvin = 0;

// convert temperature to Celsius degree 
let Celsius = Kelvin-273;


// calculate Fahrenheit corrispondent temperature
let Fahrenheit = Math.floor(Celsius * (9/5) + 32);

// thanks to math.floor method, we will obtain an integer value
// the lowest integer value near the original one


// calculate Newton corrispondent temperature
let Newton = Math.floor(Celsius * (33/100));

// show the today forecast to the user through console
// this syntax use string concatenation
console.log('today temperature is ' + Kelvin + ' kelvin, ' + Celsius + ' celsius and ' + Fahrenheit + ' fahrenheit degrees');

// this syntax use string interpolation
console.log(`today temperature is ${Kelvin} kelvin, ${Celsius} celsius, ${Fahrenheit} fahrenheit, and ${Newton} newton degrees`);





