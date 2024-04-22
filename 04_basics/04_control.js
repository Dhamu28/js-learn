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