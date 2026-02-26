// function declaration 

// console.log(add(10,20));  declaration er agei call kra jai 
function add (num1, num2){
    return num1 + num2;
}



// function expression  as like variable call er moton

const add2 = function(num1,num2){
    return num1 + num2;
}


// arrow function 
const add3 = (num1, num2)=> num1 + num2;

console.log(add3(1,9));



// arrow function  jodi onek kaj hoi tokhon { } dite hbe 
const doMath =(x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = diff * sum;
    console.log(result);
    

}
doMath(10,3)




// arrow function  

const multiple = (a,b,c)=>a*b*c;
// console.log(multiple(2,3,4));


// arrow function 

const one = x => x*10
// console.log(one(2));
 

// arrow function 

const pai = ()=> 3.1416;
// console.log(pai());
