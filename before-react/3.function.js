// function expression 
const myfun = function(a,b){
    console.log(a+b);
    

}
myfun(1,2)



// Arrow function (es6) 
const myfunc2 = (a,b)=>{
    console.log(a+b);
};
myfunc2(1,2)


// Arrow function single statement (es6)
const myfun3 = (a,b) => console.log(a+b);
myfun3(1,2)


// return Arrow function (es6)
const myfun4 = (a,b)=>{
    return a * b;
}
const multiply =  myfun4(1,2)
console.log(multiply);


//auto  return Arrow function  single statement(es6)
const myfun5 = (a,b)=>a+b;
console.log(myfun5(1,3));

