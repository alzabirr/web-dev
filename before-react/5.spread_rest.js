// Rest Oparator 
function myFun (a,b, ...restParamiters){
    console.log(a,b, restParamiters);
    
}
// myFun(1,2,3,4,5,6,7,100,200,500)



// Spread Oparator 
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [...arr1, ...arr2]
console.log(arr3);


let gratings =(year,name= "rafi")=>console.log(`good morning ${name} you are ${year} years old `);
gratings(22)
