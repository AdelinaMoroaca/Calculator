// CREATING MATH FUNCTIONS FOR ALL OF THE BASIC MATH OPERATORS
// ADD
function addNumbers(a,b){
    return a + b;
}

console.log('addNumbers', addNumbers(17,15))

// SUBTRACT
function subtractNumbers(a,b){
    return a - b;
}

console.log('subtractNumbers', subtractNumbers(17,15))

// MULTIPLY
function multiplyNumbers(a,b){
    return a * b;
}

console.log('multiplyNumbers', multiplyNumbers(17,15))

// DIVIDE
function divideNumbers(a,b){
    return a / b;
}

console.log('divideNumbers', divideNumbers(17,15))

//CREATE VARIABLES FOR EACH OF THE PARTS OF A CALCULATOR OPERATION
// let firstNum = prompt('enter first number');
let operator = document.getElementById('operator');
// let secondNum = prompt('enter second number');

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.
function operate(a, b, operator){
    if (operator === '+'){
        return addNumbers(a,b);
    } else if(operator === '-'){
        return subtractNumbers(a,b);     
    } else if(operator === '*'){
        return multiplyNumbers(a,b);     
    } else if(operator === '/'){
        return divideNumbers(a,b);     
    }
}

console.log('operate', operate(10,10,'+'));

// const calc = (a, b, operation) => {
//     if (operation === '+'){
//         return addNumbers(a,b);
//     } else if(operation === '-'){
//         return subtractNumbers(a,b);     
//     } else if(operation === '*'){
//         return multiplyNumbers(a,b);     
//     } else if(operation === '/'){
//         return divideNumbers(a,b);     
//     }
// }


// console.log('calc', calc(10,10,'/'));
