
//function to clear out output field
function clearOut () {
    document.getElementById('output').innerHTML = '';
}


//input button numbers into output field. 
let getNumber = document.getElementsByClassName('numBtn')

let numClick = function(i) {
    let newOutput = document.getElementById('output')
    let currentValue = getNumber[i].innerHTML;
    console.log (currentValue);
    newOutput.innerHTML += currentValue;
}

//formula
let total = 0;


