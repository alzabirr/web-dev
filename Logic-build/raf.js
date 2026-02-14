function sumOfArray (a){
    
    let sum = 0; 

    for(let numbers of a){
        sum = sum + numbers
    }
    return sum;
    
    
    
}
let ansIs = sumOfArray([1,2,3])
console.log(ansIs);

// console.log(sumOfArray([1,2,3,4,6]));
 