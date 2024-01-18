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
let firstNum = document.getElementById('');
let operator = document.getElementById('operator');
let secondNum = document.getElementById('');

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.
function operate(a, b, operator){
    if (operator === '+'){
        console.log('ok')
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

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use
// in the next step.
let display = document.getElementById('display');
let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('delete');

let opDivide = document.getElementById('operatorDivide');
let opMultiply = document.getElementById('operatorMultiply');
let opSubtract = document.getElementById('operatorSubtract');
let opAdd = document.getElementById('operatorAdd');
let btnPoint = document.getElementById('btnPoint');
let opEqual = document.getElementById('operatorEqual');


let num9 = document.getElementById('btn9');
let num8 = document.getElementById('btn8');
let num7 = document.getElementById('btn7');
let num6 = document.getElementById('btn6');
let num5 = document.getElementById('btn5');
let num4 = document.getElementById('btn4');
let num3 = document.getElementById('btn3');
let num2 = document.getElementById('btn2');
let num1 = document.getElementById('btn1');
let num0 = document.getElementById('btn0');


let selectNum = '';
let displayValue = (e) => {
    selectNum += e.target.textContent;
    display.innerHTML = selectNum; 
}

function clearData(){
    selectNum = '';
    display.innerHTML = '0';
}

function deleteNum(){
    
    // let x = '';
    // for(i = 0; i < selectNum.length +1; i++){
    //     console.log(x);
    //     display.innerHTML = selectNum.slice(0, -1);
    // console.log(selectNum, '6');

    // }
    // console.log(selectNum, '6');

}

num9.addEventListener('click', displayValue);
num8.addEventListener('click', displayValue);
num7.addEventListener('click', displayValue);
num6.addEventListener('click', displayValue);
num5.addEventListener('click', displayValue);
num4.addEventListener('click', displayValue);
num3.addEventListener('click', displayValue);
num2.addEventListener('click', displayValue);
num1.addEventListener('click', displayValue);
num0.addEventListener('click', displayValue);

clearBtn.addEventListener('click', clearData);
deleteBtn.addEventListener('click', deleteNum);

