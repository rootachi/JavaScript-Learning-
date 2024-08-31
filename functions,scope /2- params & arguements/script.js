//Default Params
function registerUser (user = 'Bot', ){
//if (!user) {
 // user = 'Bot';
//}
  return user + ' is registered';

}

console.log(registerUser());

//rest Params

function sum(...numbers){
 
 let total = 0;

 for (const num of numbers)
{
  total += num;
}  
return total;
}

console.log(sum(1,2,3,4,5,6));

// Object as params 

