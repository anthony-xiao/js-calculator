let numX = 0; //first number in equation
let numY = 0; //second number after operator
let numZ = 0; //third number after second operator
let currentOp = ''; //current input operator
let currentOp2 = ''; //second input operator
let displayNum = ''; //number on the screen
let displayCleared = false; //knowing whether CE was clicked, if yes than we know there is a stored number still

//operator functions
let ops = {
    '+': function (x, y) {
        console.log (Number(x) + Number(y))
        return (Number(x) + Number(y))
    },
    '-': function (x, y) {
        console.log (Number(x) - Number(y))
        return (Number(x) - Number(y))
    },
    '*': function (x, y) {
        console.log (Number(x) * Number(y))
        return (Number(x) * Number(y))
    },
    '/': function (x, y) {
        console.log (Number(x) / Number(y))
        return (Number(x) / Number(y))
    },
};

//computing the equation
let compute = function () {
    checkNum()
    countXY();
    output.innerHTML = numX;
}

//reset 
let resetCalc = function () {
    numX = 0;
    numY = 0;
    displayNum = ''
}

//function to clear out output everything
function clearOut () {
    displayCleared = false;
    let currentOp = ''; 
    let currentOp2 = '';
    resetCalc ();
    output.innerHTML = 0;
}

//function to clear out output field
function clearScreen () {
    displayNum = numX;
    output.innerHTML = 0;
    displayCleared = true;
}


// number clicks
let numClick = function (num) {
    if (displayCleared == true) {
        displayNum = num;
        displayCleared = false;
    } else {
        displayNum += num;
    }
    output.innerHTML= displayNum;
}


// operator clicks
let opClicks = function (operator) {
    if (currentOp != '') {
        currentOp2 = operator;
    } else {
        currentOp = operator;
    }
    checkNum ();
    countXY();
    displayNum = '';
};

//check numX
let checkNum = function () {
    if (numX === 0) {
        numX = displayNum;
    } else if (numX != 0 && numY === 0){
        numY = displayNum;
    } else if (numX != 0 && numY != 0) {
        numZ = displayNum;
    }
}

//execute calculate X and Y
let countXY = function () {
    if (numX !== 0 && numY !== 0) {
        numX = ops [currentOp] (numX, numY);
        currentOp = currentOp2;
        currentOp2 = '';
        numY = 0
}
}













/*
let total = 0;
let equation = []

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

let saveLastNum = function () {
    let oldNum = Number(output.innerHTML);
}
//addEventListener

//formulas

//addition
function getSum(total, operator, num) {
    if (num == null) {
        return total;
    } else {
    return total + num;
    }
}

//minus
function getDif(total, operator, num) {
    if (num == null) {
        return total;
    } else {
    return total - num;
    }
}

//multiply
function getMult(total, operator, num) {
    if (num == null) {
        return total;
    } else {
    return total * num;
    }
}

//divide
function getDivide(total, operator, num) {
    if (num == null) {
        return total;
    } else {
    return total / num;
    }
}

let addition = function () {
    equation.push(saveLastNum());
    //equation.push(add.innerHTML)
    total = equation.reduce(getSum);
    equation = [total];
    output.innerHTML = total;
    clearScreen();      /* this is clearing but the next line inputs first number back in*/



/*
//count number of numbers the equation array
let numCount = function () {
    count = 0;
    for (let x = 0; x < equation.length; x++) {
        if (isNaN(equation[x])== false) {
            count++
        }
    }
    return count;
}

/*
let mathOps = function () {
    if (equation[1] == '+') {
        total = getSum.apply(null, equation);
        equation = [total];
        console.log (total)
    } else if (equation[1] == '-') {
        total = getDif.apply(null, equation);
        equation = [total];
        console.log (total)
    } else if (equation[1] == '*') {
        total = getMult.apply(null, equation);
        equation = [total];
        console.log (total) 
    } else if (equation[1] == '/') {
        total = getDivide.apply(null, equation);
        equation = [total];
        console.log (total) 
    }
}
*/
/*
let minus = function () {
    equation.push(saveLastNum());
    total = equation.reduce(getDif);
    equation = [total];
    output.innerHTML = total;
    clearScreen();      /* this is clearing but the next line inputs first number back in*/


/*    let sign = document.getElementsByClassName('formu').innerHTML
    console.log (sign);
    */

/*for (var x = 0; x < ops.lenght; x ++)
    if (document.getElementsByClassName('ops').innerHTML = '+') {
        total = oldNum + newNum
    } */

/*
let compute = function (operand1, operator1, operand2, operator2, operand3) {
    if (equation.length = 5) {

    }
}
*/