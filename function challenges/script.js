// create a function called getCelsius()
//that takes a temperature in fahrenheit as an argument and returns the temperature in celsius (Challenge 1)

// function getCelsius(f){

// const celsius = (f - 32) * 5 / 9;

// return celsius;


// }

const getCelsius = (f) => (f - 32) * 5 / 9;


console.log(`the temp is ${getCelsius(50)} \xB0C`);


// Challenge 2 : Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array 

function minMax (arr) {

  const min = Math.min(...arr);
  const max = Math.max(...arr);
 

return {
  min,
  max,
};
}

console.log(minMax ([1,30,3,4,5]));


//Challenge 3 

((length, width)=>{

  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);