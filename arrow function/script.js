// function add(a, b){
// return a + b ;

// }

//Arrow function syntax
const add = (a, b) => {
  return a + b;

};

// Implicit Return
const substract = (a, b) => a - b;

// can leave off () with single param
const double = a => a * 2;

//Returning an object 

const createObj = () =>( {

  name: 'Brad',
});


const numbers = [1, 2 , 3 , 4 , 5];
numbers.forEach(function (n){
  console.log(n);

});
  
//Arrow for callback
numbers.forEach((n) => console.log(n));

console.log(add(1,2));

console.log(substract(10, 5));
console.log(double(10));
console.log(createObj);