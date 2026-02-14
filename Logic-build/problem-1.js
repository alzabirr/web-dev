// Count how many times each word appears in a sentence and retirn the result as an object 

// rules :
//  ignore case differences
//  ignore extra spaces 

// example :
// input : i love js and i love coding and js is fun 
// output : {
//     i : 2 ,
//     love : 2 ,
//     js : 2 ,
//     and : 2 ,
//     coding : 1 ,
//     is : 1 ,
//     fun : 1 
// }


// function wordFrequency(sentence){
//     let words = sentence.split(" ");
//     let wordsCount = {};
//     for(let word of words){
//         let wordLowercase = word.toLowerCase();
//         if(wordsCount.hasOwnProperty(wordLowercase)){
//             wordsCount[wordLowercase] ++;

//         } else {
//             wordsCount[wordLowercase] = 1;
//         }
//     }
//     return wordsCount;
// }
// let output = wordFrequency("i love js and i love coding and js is fun Fun");
// console.log(output);


// function twonumbers(a, b) {
//     return a + b;
// }
// console.log(twonumbers(2,3));

// // twonumbers(2,3);

// function newPrice(currentPrice, discount) {

//     // validation
//     if (typeof currentPrice !== "number" || typeof discount !== "number") {
//         return "Invalid";
//     }

//     if (discount < 0 || discount > 100) {
//         return "Invalid";
//     }

//     // discount calculation
//     let discountAmount = (currentPrice * discount) / 100;
//     let finalPrice = currentPrice - discountAmount;

//     // return with 3 decimal places
//     return finalPrice.toFixed(3);
// }


function validOtp(otp) {
    // Your code here
    if(typeof otp !== "string"){
        
        return "Invalid";
    }
    if(otp.length !== 8){
        return "Invalid";
    }
    for(let i = 0; i < otp.length; i++){
        if(isNaN(parseInt(otp[i]))){
            return "Invalid";
        }   
    }
}