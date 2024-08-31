const library = [
{
  title:'The Road Ahead',
  author: 'Bill Gates',
  status: {
    own: true,
    reading: false,
    read: false
  }
},
{
  title:'Kafka on the offshore',
  author: 'Haruki Murakami',
  status: {
    own: true,
    reading: false,
    read: false
  }
},
{
  title:'Moking Jak',
  author: 'Sima Collins',
  status: {
    own: true,
    reading: false,
    read: false
  }
},

];
//step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


//step 3

const { title: firstBook } = library[0];

console.log(firstBook);

//step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);