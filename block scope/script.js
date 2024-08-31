const x = 100;

if (true){

  const y = 200;
  console.log(x + y);
}

for (let i = 0; i<= 10; i++ ) { // i is scoped in this loop 
  console.log(i);
}

if (true){
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);