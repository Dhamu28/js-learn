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
// Non Single tone object
const tinderUser= {};

console.log(tinderUser);