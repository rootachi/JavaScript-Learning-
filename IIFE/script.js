(function() {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
} )();


(function (name) {

  console.log('hello' + name);
})('Shawn');


(function hello (){
  console.log('Hello');

})();