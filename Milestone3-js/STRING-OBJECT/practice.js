// let bike ={
//     color : "Black",
//     brand : "Honda",
//     pillion : 2,
//     milage :35,
//     isMeteDigital : true,
//     advantages: ["Less milage", "High speed", "Low Configuration"],


//     battery:{
//         color : "red",
//         durabiility : "strong",
//         warranty : "2 years"

//     },

// };
// console.log(bike);

// // console.log(bike);


// // sccess a spacific property or key  
// // 1.dot notation
// // console.log(bike.color);
 
// // 2.bracket notation
// console.log(bike["milage"]);







let bike ={
    color : "Black",
    brand : "Honda",
    pillion : 2,
    milage :35,
    isMeteDigital : true,
    advantages: ["Less milage", "High speed", "Low Configuration"],


    battery:{
        color : "red",
        durabiility : "strong",
        warranty : "2 years"

    },

};

// for in loop eta just object er jonno 
for(let key in bike ){
    console.log(key );
    

}