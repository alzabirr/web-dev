// template string  string ke Dynamic krar kaj a use kra hoi and multilyne o use kra jai 
const firstName = "Al";
const lastName = "Zabir";


// const fullName1= "full name is :" +firstName+ ' ' + lastName;  eta na kre nicher ta korbo 

const fullName = `My name is ${firstName} ${lastName}`
const giveMe =`give me money ${10+20+30}` 
// console.log(fullName);


// example 
function getCardHtml (name, price, drescription){
    const div = `
    <div clas = "card">
        <h2>${name.toUpperCase()} boroloks </h2>
        <h2>${price}</h2>
        <p>${drescription}</p>
        </div>
    `;
    console.log(div);
    
}
getCardHtml("iphone 12", "1200", "this phone is Wow" )