// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use
// in the next step.
let resultDisplay = document.getElementById('resultDisplay');
let display = document.getElementById('display');
let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('delete');
let pointBtn = document.getElementById('btnPoint');

const errorDivide = document.getElementsByClassName('divideBy0');

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


//CREATE VARIABLES FOR EACH OF THE PARTS OF A CALCULATOR OPERATION
let firstNum = '0';
let secondNum = '';
let point = '';
let decimals = '';
let operator = '';
let result = '';
let flag = true;

resultDisplay.innerHTML = firstNum; 

// CREATING MATH FUNCTIONS FOR ALL OF THE BASIC MATH OPERATORS
// ADD
function addNumbers(firstNum, secondNum){
    result = Number(firstNum) + Number(secondNum);
    return result;
}

// SUBTRACT
function subtractNumbers(firstNum, secondNum){
    result = Number(firstNum) - Number(secondNum);
    return result;
}

// MULTIPLY
function multiplyNumbers(firstNum, secondNum){
    result = Number(firstNum) * Number(secondNum);
    return result;
}

// DIVIDE
function divideNumbers(firstNum, secondNum){
    result = Number(firstNum) / Number(secondNum);
    return result;
}

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

function selectEqualOperator(){
    if(operator === '/' && secondNum === '0' && firstNum !== ''){ 
        for (const divideBy0 of errorDivide) {
           divideBy0.disabled = true;
        }
        resultDisplay.innerHTML = `ERROR for divide by 0!Use CLEAR button!`;
    
    } else if(operator === '/' && firstNum !== '' && secondNum !== '0' && secondNum !== ''){
        result = divideNumbers(firstNum,secondNum).toFixed(3).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';

    } else if(operator === '/' && firstNum !== '' && secondNum === ''){
        secondNum = firstNum;
        divideNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
 
    } else if(operator === '+' && firstNum !== '' && secondNum === ''){
        secondNum = firstNum;
        addNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } else if (operator === '+' && firstNum !== '' && secondNum !== ''){
        result = addNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';

    } else if(operator === '*' && firstNum !== '' && secondNum === ''){
        secondNum = firstNum;
        multiplyNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } else if (operator === '*' && firstNum !== '' && secondNum !== ''){
        result = multiplyNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';

    } else if(operator === '-' && firstNum !== '' && secondNum === ''){
        secondNum = firstNum;
        subtractNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } else if (operator === '-' && firstNum !== '' && secondNum !== ''){
        result = subtractNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';
    }

    flag = true;
}

let selectMathOperator = (e) => {
    flag = false;
    if(operator === ''){
        operator = e.target.textContent;
        display.innerHTML = firstNum + operator;
        operator = e.target.textContent;
        
    } else {
        display.innerHTML = firstNum + operator + secondNum;
        if (operator === '+' && firstNum !== '' && secondNum !== '' ){
            result = addNumbers(firstNum,secondNum);
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;
            secondNum = '';
            display.innerHTML = firstNum + operator + secondNum;
            operator = e.target.textContent;

        } else if(operator === '/' && secondNum === '0' && firstNum !== ''){
            for (const divideBy0 of errorDivide) {
                divideBy0.disabled = true;
            }
            resultDisplay.innerHTML = `ERROR for divide by 0!Use CLEAR button!`;
            
        } else if(operator === '/' && firstNum !== '' && secondNum !== '0' && secondNum !== ''){
            result = divideNumbers(firstNum,secondNum);
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result.toFixed(3).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
            firstNum = result;
            operator = e.target.textContent;
            

            secondNum = '';
            display.innerHTML = firstNum + operator + secondNum;
            operator = e.target.textContent;

        } else if(operator === '*' && firstNum !== '' && secondNum !== '' ){
            result = multiplyNumbers(firstNum,secondNum);
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;
            

            secondNum = '';
            display.innerHTML = firstNum + operator + secondNum;
            operator = e.target.textContent;

        }  else if (operator === '-' && firstNum !== '' && secondNum !== ''){
            result = subtractNumbers(firstNum,secondNum);
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;


            secondNum = '';
            display.innerHTML = firstNum + operator + secondNum;
            operator = e.target.textContent;
    
        } else if (operator === '-' || operator === '+' || operator === '*' || operator === '/'){
            operator = e.target.textContent;
            display.innerHTML = firstNum + operator;
            if (operator === '+' && firstNum !== '' && secondNum !== '' ){
                    result = addNumbers(firstNum,secondNum);
                    display.innerHTML = firstNum + operator + secondNum;
                    resultDisplay.innerHTML = result;
                    firstNum = result;
                    operator = e.target.textContent;
                    secondNum = '';
                    display.innerHTML = firstNum + operator + secondNum;
                    operator = e.target.textContent;
        
                } else if(operator === '/' && secondNum === '0' && firstNum !== ''){
                    for (const divideBy0 of errorDivide) {
                        divideBy0.disabled = true;
                    }
                    resultDisplay.innerHTML = `ERROR for divide by 0!Use CLEAR button!`;
                    
                } else if(operator === '/' && firstNum !== '' && secondNum !== '0' && secondNum !== ''){
                    result = divideNumbers(firstNum,secondNum);
                    display.innerHTML = firstNum + operator + secondNum;
                    resultDisplay.innerHTML = result.toFixed(3).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
                    firstNum = result;
                    operator = e.target.textContent;
                    
        
                    secondNum = '';
                    display.innerHTML = firstNum + operator + secondNum;
                    operator = e.target.textContent;
        
                } else if(operator === '*' && firstNum !== '' && secondNum !== '' ){
                    result = multiplyNumbers(firstNum,secondNum);
                    display.innerHTML = firstNum + operator + secondNum;
                    resultDisplay.innerHTML = result;
                    firstNum = result;
                    operator = e.target.textContent;
                    
        
                    secondNum = '';
                    display.innerHTML = firstNum + operator + secondNum;
                    operator = e.target.textContent;
        
                }  else if (operator === '-' && firstNum !== '' && secondNum !== ''){
                    result = subtractNumbers(firstNum,secondNum);
                    display.innerHTML = firstNum + operator + secondNum;
                    resultDisplay.innerHTML = result;
                    firstNum = result;
                    operator = e.target.textContent;
        
        
                    secondNum = '';
                    display.innerHTML = firstNum + operator + secondNum;
                    operator = e.target.textContent;
                }
        }
    }
}

let displayValue = (e) => {
    if(flag){
        if(firstNum === '0'){
            firstNum = e.target.textContent;
            display.innerHTML = firstNum; 
            resultDisplay.innerHTML = firstNum; 

        } else {
            firstNum += e.target.textContent;
            display.innerHTML = firstNum + operator;
            resultDisplay.innerHTML = firstNum; 
        }

    } else {
        secondNum += e.target.textContent;
        display.innerHTML = firstNum + operator + secondNum;
    }
}

function pointNum(){
    if(firstNum && secondNum === '' && point === ''){
        point = '.';
        decimals = '';
        firstNum = firstNum + point + decimals; 
        point = '';
        display.innerHTML = firstNum + operator; 
    
    } else if (firstNum && secondNum && point === '') {
        point = '.';
        decimals = '';
        secondNum = secondNum + point + decimals; 
        display.innerHTML = firstNum + operator + secondNum; 

    }
}
   

function clearData(){
    firstNum = '0';
    secondNum = '';
    operator = '';
    for (const divideBy0 of errorDivide) {
            divideBy0.disabled = false;

    }
    display.innerHTML = firstNum;
    resultDisplay.innerHTML = firstNum;
}

function deleteNum(){
    firstNum = firstNum.toString();
    firstNum = firstNum.slice(0, -1);

    if(firstNum.length < 1){
        firstNum = '0';
        resultDisplay.innerHTML = firstNum;
    } else {
        result = firstNum;
    }

    display.innerHTML = firstNum;
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
pointBtn.addEventListener('click', pointNum);


opAdd.addEventListener('click', selectMathOperator);
opSubtract.addEventListener('click', selectMathOperator);
opMultiply.addEventListener('click', selectMathOperator);
opDivide.addEventListener('click', selectMathOperator);
opEqual.addEventListener('click', selectEqualOperator);


//delete button doesent work with numbers after operation slice does not apply

// Add keyboard support! You might run into an issue where keys such as (/) 
//might cause you some trouble: MDN documentation for event.preventDefault
// to help solve this problem.