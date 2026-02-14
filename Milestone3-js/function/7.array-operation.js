// objective : write a function to give me the sum of all numbers in an array 

// step 1 : declare a function  

// function sumOfnumbers (numbers){
//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum+number;  
//     }
//     return sum
// }
// const numbs = [1,4,7,8,3,2,6];

// const sum = sumOfnumbers(numbs);
// console.log(sum);
   
function  someOfnumbers (numbers){
    let sum = 0 ;

    for(const number of numbers ){
 
        sum = sum + number;
    }
    return sum
}
const numbs = [1,3];
const sum = someOfnumbers(numbs);
console.log(sum);
