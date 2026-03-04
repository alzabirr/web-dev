
// JSON -> js object with notation 
const person = {
    name : "rafi",
    age: 22,
    good : false
    
}
// console.log(person);

//object to json ->(JSON.stringify)
const makeJson = JSON.stringify(person);  
console.log(makeJson);

// json to object -> (JSON.parse)
const makeObject = JSON.parse(makeJson);
console.log(makeObject);



// example json data dekte kemon =>
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
// -----------------------------------