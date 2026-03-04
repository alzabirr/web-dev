
// const person = {
//     name : "rafi",
//     age: 22,
//     good : false
// }
// // console.log(person);


// // console.log(JSON.stringify(person));
// const makeJson = JSON.stringify(person);
// console.log(JSON.parse(makeJson));


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))