let a = 30;
function count()
{
    let a = 10;
    let b = 40;
console.log(a);
// console.log(num);
    function counter(){
        let num = 25;
        console.log(num);
        console.log(b);
    }
    counter();
}
count();
console.log(a);
addOne();// it can be use because it's defined

function addOne(number){
    return number+1;
}

addTwo();// this is not defiend

const addTwo = function(numb){
    return numb+2;
}