const post = {

  id: 1,
  title: 'Post One',
  body: 'Hi this is me',

};

//convert to json string 

const str = JSON.stringify(post);

console.log(str.id);
//parse JSON

const obj = JSON.parse(str)

console.log(obj.id);
const posts = [
  {

  id: 1,
  title: 'Post One',
  body: 'Hi this is me',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'Hi this is me',
  
}
];

const str2 = JSON.stringify(posts)

console.log(str2);