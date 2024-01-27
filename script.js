// CREATING MATH FUNCTIONS FOR ALL OF THE BASIC MATH OPERATORS
// ADD
function addNumbers(firstNum, secondNum){
    return Number(firstNum) + Number(secondNum);
}

// SUBTRACT
function subtractNumbers(firstNum, secondNum){
    return Number(firstNum) - Number(secondNum);
}

// MULTIPLY
function multiplyNumbers(firstNum, secondNum){
    return Number(firstNum) * Number(secondNum);
}

// DIVIDE
function divideNumbers(firstNum, secondNum){
    return Number(firstNum) / Number(secondNum);
}

console.log('divideNumbers', divideNumbers(17,15))

//CREATE VARIABLES FOR EACH OF THE PARTS OF A CALCULATOR OPERATION
let firstNum = '0';
let secondNum = '';
let operator = '';
let flag = true;

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

function operate(){
    console.log('equal');
    if (operator === '+'){
        resultDisplay.innerHTML = addNumbers(firstNum,secondNum);
    } else if(operator === '-'){
        resultDisplay.innerHTML = subtractNumbers(firstNum,secondNum);     
    } else if(operator === '*'){
        resultDisplay.innerHTML = multiplyNumbers(firstNum,secondNum);     
    } else if(operator === '/'){
        resultDisplay.innerHTML = divideNumbers(firstNum,secondNum);     
    }
    console.log('FINAL FIRSTNUM', firstNum);
    console.log('operator', operator);
    console.log('FINAL SECONDNUM', secondNum);
    // flag = true;
}
// console.log('operate', operate(10,120,'/'));

let selectOperator = (e) => {

    flag = false;
    console.log("Flag: " , flag)
    operator = e.target.textContent;

    resultDisplay.innerHTML = firstNum + operator + secondNum; 
    console.log('operator', operator);
}

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use
// in the next step.
let resultDisplay = document.getElementById('resultDisplay');
// let display = document.getElementById('display');
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
resultDisplay.innerHTML = firstNum; 

let displayValue = (e) => {
    // if(firstNum === '0'){
    //     firstNum = e.target.textContent;
    //     resultDisplay.innerHTML = firstNum; 
    // } else {
    //     firstNum += e.target.textContent;
    //     resultDisplay.innerHTML = firstNum; 
    // }
    // if(operator === '+'){

    // }

    if(flag){
        if(firstNum === '0'){
            firstNum = e.target.textContent;
            resultDisplay.innerHTML = firstNum; 
        } else {
            firstNum += e.target.textContent;
            resultDisplay.innerHTML = firstNum; 
        }
    } else {
        if(secondNum === '0'){
            secondNum = e.target.textContent;
            resultDisplay.innerHTML = firstNum + operator + secondNum; 
        } else {
            secondNum += e.target.textContent;
            resultDisplay.innerHTML = firstNum + operator + secondNum;  
        }
    }
}


function clearData(){
    firstNum = '0';
    resultDisplay.innerHTML = firstNum;
}

function deleteNum(){
    firstNum = firstNum.slice(0, -1);
    // resultDisplay.innerHTML = firstNum;
    if(firstNum.length < 1){
        firstNum = '0';
        resultDisplay.innerHTML = firstNum;
    }
    resultDisplay.innerHTML = firstNum;
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


opAdd.addEventListener('click', selectOperator);
opSubtract.addEventListener('click', selectOperator);
opMultiply.addEventListener('click', selectOperator);
opDivide.addEventListener('click', selectOperator);
opEqual.addEventListener('click', operate);


//pas 1:store first number
//pas 2:oprator
// pas 3 :store second number : pt rezolvare pas 3 : se reface pasul 1

//function oprate() is triggered when you pres '='
//when operate() is called, update the display with the ‘solution’ to the operation(code that can populate the display)

//first number = result
//second num =number;