
//function to clear out output field and console
function clearOut () {
    output.innerHTML = '';
    console.clear();
    total = 0;
    equation = [];
}

//function to clear out output field
function clearScreen () {
    output.innerHTML = '';
}

//input button numbers into output field. 
let getNumber = document.getElementsByClassName('numBtn')

let numClick = function(i) {
    let newOutput = document.getElementById('output')
    let currentValue = getNumber[i].innerHTML;
    console.log (currentValue);
    newOutput.innerHTML += currentValue;
}

//formulas

//addition
function getSum(total, num) {
    if (num == null) {
        return total;
    } else {
    return total + num;
    }
}

let saveLastNum = function () {
    let screenNum = output.innerHTML;
    let oldNum = Number(screenNum);
    return oldNum;
}

let total = 0;
let equation = []
//addEventListener

let addition = function () {
    equation.push(saveLastNum());
    total = equation.reduce(getSum);
    clearScreen();
    return total;
    output.innerHTML = total;
}

/*    let sign = document.getElementsByClassName('formu').innerHTML
    console.log (sign);
    */

for (var x = 0; x < ops.lenght; x ++)
    if (document.getElementsByClassName('ops').innerHTML = '+') {
        total = oldNum + newNum
    }

