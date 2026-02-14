

const student = {
    name : "Rafi",
    id : 12345,
    address : "Dhaka",
    isSingle : true,

    // object er vitire array 
    friends : ["abul", "babul", "cabul"],

    // array er vitore object 

    movies : [        //this is array 
        {name: "king khan", year: 2023, rating: 4.5},  //object 
        {name: "shakib", year: 2022, rating: 4.0},     //object
        {name: "salman", year: 2021, rating: 3.5}      //object 
     ],

    // use function
    act : function(){
        console.log("acting now"); 
    },
    

    // object er vitore object
    cars :{
        brand : "Tesla",
        price : 50000,
        model : "2025",

        // abar ei object er vitore abar object 
        manufacturer :{
            name : "Tesla Inc.",
            country : "USA",

        }

    }
}

// function call 
// student.act();
console.log(student.act());



