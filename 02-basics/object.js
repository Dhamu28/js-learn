// singleton objected call constrator
// Object.create (constractor)
// object literals
const symblAsKey = Symbol("key")
const jsUser = {
Name : "Jugal",
Cast : "Dhamu",
[symblAsKey] : "307191",
Age : "32",
location : "aph"
}
// console.log(jsUser);
// console.log(jsUser.Cast);
// console.log(jsUser["Cast"]);
// console.log(jsUser[symblAsKey]);
// Object.freeze("Name"); array value freeze that not to be change
jsUser.name = "Jugal Kishore";

// Object class second
// Singleton object
// const tinderUser = new Object();
// Constractor object
const tinderUser= {};
tinderUser.id = "225"
tinderUser.name = "Jugal"
tinderUser.age = "32"
tinderUser.isLogedIn = true

console.log(tinderUser);

const regularUser = {
    email : "avc@com",
    fullName : {
        firstName : "Jivan",
        lastName : "Suthar"
    },
    hobby : ["playing", "Singing", "Listening"]
};
console.log(regularUser.fullName.firstName);
console.log(regularUser.hobby[1]);
const obj1 = {1 : "One", 2 : "two", 3 : "threee"};
const obj2 = {11 : "EleOne", 12 : "twelo", 13 : "threteen"};
console.log(obj1);
console.log(obj2);
// merge objects 
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// new method to joint a object or array
// const joinObj = {...obj1, ...obj2};
// console.log(joinObj);
const users = [
    {
        id : 1,
        email : "info@js.com"
    },
    {
        id : 2,
        email : "info@js.com"
    },
    {
        id : 3,
        email : "info@js.com"
    },
]
console.log(users[0].id);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('age'));

