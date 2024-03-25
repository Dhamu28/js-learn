const user = {
    username : "Jugal",
    price : 009,
    welComeMsj : function (){
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
    }
}
// user.welComeMsj();
// console.log(user.welComeMsj());
// console.log(this);

function coffee(){
    let username = "Dhamu";
    console.log(this.username);
    console.log(this);
}

// coffee();
const chai = function() {
    let username = "Dhamu";
    console.log(this.username);
    console.log(this);

}
// chai();

const ptili = () => {
    let username = "Dhamu";
    console.log(this.username);
    console.log(this);
}
// ptili();
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo('r', 'f'));

// you also can use arrow function with {}, but you need to put it in same line
const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);
// to reture object you need to use ()
const addTwo = (num1, num2) => ({username: "Dhamu"});


console.log(addTwo('r', 'f'));
