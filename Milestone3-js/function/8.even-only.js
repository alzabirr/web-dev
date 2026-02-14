// *
// create functioon that will return only the even nuimbers
// *


function evenNumbersOnly(numbers){
    const evens = []
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number, "thisis ");
            evens.push(number) 
        }
        return evens
    }

}
const numbers = [1,2,3,4,5,6,7,8];
evenNumbersOnly(numbers)