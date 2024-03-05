// function additionNum(a, b){
//     console.log(a+b);
// }
function additionNum(a, b){
    // let result = a+b;
    // return result;
    return a + b;
}
additionNum(2, 9);
// console.log(additionNum(2, 9));
const result = additionNum(2, 9);
// console.log("Result : ", result);

function logInUserMsj(userName = "Dhamu"){ // here you are going to set a default value if no value then return defalut otherwise replace with agrument
    // if(userName == null){
    // if(userName === undefined){
        if(!userName){
        return "please pass the user name";
    }
    return `${userName} just Logged in`;
}
logInUserMsj("Rakesh");
console.log(logInUserMsj("d"));
// if receive uncount parameters in function like cart order
function calCartPrice(...orderPrice){
    return orderPrice;
}
console.log(calCartPrice(200, 30, 554, 15));

const visiter = {
    id : "admin1",
    pass : "Admin@1"
}
const visiter2 = {
    id : "admin2",
    pass : "Admin@2"
}
function handleObj(anyobj){
    return `Dear user your id is ${anyobj.id} and password is ${anyobj.pass}`;
}
// console.log(handleObj(visiter2));
console.log(handleObj({
    id : 12,
    pass : "12@12"
}));

// passing array in function
const newArrValue = [200, 500, 800];
function getArrVal(arrVal){
    return arrVal[1];
}
console.log(getArrVal(newArrValue));