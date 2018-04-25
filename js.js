let num1 = 0; //first number in equation
let num2 = 0; //second number after operator
let currentOp = ''; //current input operator
let displayNum = ''; //number on the screen
let displayCleared = false;
let previousNum = '';
let saveNum = false;



//operator functions
let ops = {
    '+': function (x, y) {
        console.log (x + y)
        return x + y
    },
    '-': function (x, y) {
        console.log (x - y)
        return x - y
    },
    '*': function (x, y) {
        console.log (x * y)
        return x * y
    },
    '/': function (x, y) {
        console.log (x / y)
        return x / y
    },
};


//function to clear out output everything
function clearOut () {
    output.innerHTML = '';
    num1 = 0;
    num2 = 0;
    currentOp = ''
    displayCleared = false;
    previousNum = '';
    saveNum = false;
}

//function to clear out output field
function clearScreen () {
    displayNum = num1;
    output.innerHTML = '';
    displayCleared = true;
}


let num1 = 0; //first number in equation
let num2 = 0; //second number after operator
let currentOp = ''; //current input operator
let displayNum = ''; //number on the screen
let displayCleared = false;
let previousNum = '';
let saveNum = false;



//operator functions
let ops = {
    '+': function (x, y) {
        console.log (x + y)
        return x + y
    },
    '-': function (x, y) {
        console.log (x - y)
        return x - y
    },
    '*': function (x, y) {
        console.log (x * y)
        return x * y
    },
    '/': function (x, y) {
        console.log (x / y)
        return x / y
    },
};


//function to clear out output everything
function clearOut () {
    num1 = 0;
    num2 = 0;
    previousNum = '';
    saveNum = false;
    displayCleared = false;
    displayNum = '';
    output.innerHTML = '';
}

//function to clear out output field
function clearScreen () {
    displayNum = num1;
    output.innerHTML = '';
    displayCleared = true;
}


// number clicks
let numClick = function (num) {
    if (displayCleared == true) {
        displayNum = num;
        displayCleared = false;
    } else {
        displayNum = displayNum + num;
    }
    output.innerHTML= displayNum;
    if (saveNum == true) {
        num1 = previousNum;
        num2 = displayNum + num;
        output.innerHTML = displayNum
        saveNum = false;
    }
}

// operator clicks
let opClicks = function (operator) {
    if (saveNum == true) {
        num1 = 0;
        num2 = 0;
    } else {
        num1 = displayNum;
        num2 = 0;
    }
    currentOp = operator;
    if (num1 === 0) {
        num1 = displayNum;
    } else {
        num2 = displayNum;
    }
    displayNum = '';
};

//computing the equation
let compute = function () {
    if (num1 === 0) {
        num1 = displayNum;
    } else {
        num2 = displayNum;
    }
    if (num1 !== 0 && num2 !== 0) {
        num1 = ops [currentOp] (num1, num2);
    }
    saveNum = true;
    previousNum = num1;
    output.innerHTML = num1;
    num1 = 0;
    num2 = 0;
    displayNum = ''
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
}


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
}

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