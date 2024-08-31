function first () {

  const x = 100;

  function second (){
    const y = 200;
    console.log(x + y);

  } //nested function 

second ();

}

first ();

if (true){

  const x = 100;

  if (x===100){
    const y = 200;
    console.log(x + y);
  }


}

//here you can access parents and then the child but you can't access directly the child outside of the scope 