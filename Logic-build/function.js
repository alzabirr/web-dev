// basic function 
function add(a,b){
    console.log(a+b);
    

}
// add(1,2)



// Return 
function sumTwoAndmultiplyByFive(num1, num2){
    
    let sum = num1 + num2;
    let result = sum * 5 ;
    // console.log(result);
    return result;
    
}
let a = sumTwoAndmultiplyByFive(2,2);
let b = sumTwoAndmultiplyByFive(4,4);
// console.log(a,b);
 





// jor hoile return korbe 
function sumTwoAndmultiplyByFive(num1, num2){
    
    let sum = num1 + num2;
    let result = sum * 5 ;

    if(result % 2 === 0){
        return result; 
    }
    else{
        return "this in not even number"
        
    }
}
let result1 = sumTwoAndmultiplyByFive(3,2);
let result2 = sumTwoAndmultiplyByFive(10,5);
let result3 = sumTwoAndmultiplyByFive(10,6);
// console.log(result1,result2,result3);


 


// paramiter array  sum 

function sumArray(ar){
   let sum = 0 ;
   
   for(number of ar ){
    sum = sum + number
   }
   console.log(sum);
   
}

// sumArray([10, 20, 30, 40, 50])



// obj 

// function countObj (person){
//     let count = Object.values(person)
//     console.log(count);
    
    
// }
// let person = {name: "Hudai", age: 24};
// countObj(person)


