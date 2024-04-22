// const score = 200;
// if(score > 100){
//     let power = "flly";
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power : ${power}`);
// short hand notation
// if(score<100) console.log("Score is big");

const loggedIn = true;
const isDabit = true;
const isGoogleIn = false;
const logInEmail = true;

if(loggedIn && isDabit){
    console.log("Allow user to buy");
}else {console.log("Denay User to buy");}

if (isGoogleIn || logInEmail) {
console.log("User Logged in via Google or Email");
}


// ************* Switch Case
 const month = 4;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
}

// *********** Truthy Values
const userEmail = "info@dhamutech.com";
if (userEmail) {
    console.log(`User email is ${userEmail}`);
} else {
    console.log("Don't have user email");
}

// Check empty array
const emtyArr = [];
if(emtyArr.length === 0)console.log("Array is empty");

// Check empty array

const emptObj = {};
if (Object.keys(emptObj).length === 0) console.log("Object is empty");

// terniory operator
const coffee = 200;
coffee <= 100 ? console.log("Add to cart") : console.log("Don't want to buy");