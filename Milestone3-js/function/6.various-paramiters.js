function evenSizeString (str){
    const size = str.length;
        if(size % 2 === 0){
            console.log("even number");
            return true
        }
        else{
            console.log("odd number");
            return false;
        }
    console.log(str,size);
    

}
// console.log(evenSizeString("rafi"));



function doDoubleOrTriple(number, doDoble){
    if(doDoble === true){
        const result = number *2 
        return result
    }
    else{
        const result = number *3;
        return result;
    }

}
// console.log(doDoubleOrTriple(5, false))



function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
// console.log(numberOfElements([12,11,13,14,15,16]));


function getAge(person){
    const age = person.age
    return age;
}
console.log(getAge(6));
