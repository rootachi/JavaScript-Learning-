const firstName = 'JHON';
const lastName = 'Doe';

const age = 40 ;

const person = {
  firstName,
  lastName,
  age,
};


console.log(person.age);

//Destructuring 

const todo = {

  id: 1,
  title: 'Take out trash',
  user: {
    name: 'Jhon',
  },

};

const {
  id: todoId,
title,
user:{
  name
}} = todo;
  
  console.log (todoId);

// Destructure arrays
  const numbers = [23, 35, 56, 67]

  const [first, second, ...rest] = numbers;

  console.log (first, second, rest);