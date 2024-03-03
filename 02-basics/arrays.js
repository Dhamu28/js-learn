// array
const myArray = [12, 3, 6, 56, 14, 55];
console.log(myArray[3]);
const myHeroes =["Apple", "Banana", "Mengo"];
console.log(myHeroes);
myHeroes.push("book");
console.log(myArray.length);
console.log(myHeroes);
// remove last value
myHeroes.pop();

// console.log(myHeroes);

// myArray.shift(5);
console.log(myArray);
console.log(myHeroes);
console.log(myArray.join());

// NEXT ARRAY.JS
const player =  ["Sachin", "Sehwag", "Dhoni"];
const newPlayer = ["Rohit", "Virat", "Bumrah"];
// player.push(newPlayer);
console.log(player);
//console.log(player[3][2]);// Nested array to access
const allPlayer = player.concat(newPlayer);
console.log(allPlayer);
const allNewPlayer = [...player, ...newPlayer];
console.log(allNewPlayer);
const nestArr = [1, 2, [11, 23, [201, 203]], 11, [31, 45], 15 ]
console.log(nestArr);
console.log(nestArr.flat(Infinity));
console.log(nestArr[2][2][1]);
const strArr = "jugal";
console.log(Array.from(strArr));
let scr = 12;
let scr1 = 125;
let scr2 = 142;
console.log(Array.of(scr, scr1, scr2));