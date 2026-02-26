const maxnumber = Math.max(3,44,5,67,8,9);
// console.log(maxnumber);


// spreed-operator 
 const number = [1,3,6,8,9,88];
 const maxNumber2 = Math.max(...number);
 console.log(maxNumber2);
 


//  object 

const person = {
    name : "Rafi",
    age: 22
};
const person2 = {...person}
person.salary = 30000;
console.log(person);
console.log(person2);



