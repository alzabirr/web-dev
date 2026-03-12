// Falsy value 
// -> false
// -> 0 
// -> null 
// -> undefined 
// -> NaN



// Example :

// Truthy value 
// -> false value gula baad diye baki sob truthy value 


// falsy value 
// if(NaN){
//     console.log("if black triggered");
    
// }else{
//     console.log("else block triggred");
    
// }


// Truthy value 
// if("hello"){
//     console.log("if black triggered");
    
// }else{
//     console.log("else block triggred");
    
// }




let arr = [1,2,3,4,5,6,7];
let isExist = arr.find(elem =>elem ===3)
console.log(isExist);

if(isExist){
    console.log("is existed");
    
}
else{
    console.log("not found");
    
}