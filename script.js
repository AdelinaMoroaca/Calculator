// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use
// in the next step.
let resultDisplay = document.getElementById('resultDisplay');
// let display = document.getElementById('display');
let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('delete');
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

function operate(){
    if(operator === '/' && secondNum === '0' && firstNum !== ''){
        for (const divideBy0 of errorDivide) {
           divideBy0.disabled = true;
        }
        resultDisplay.innerHTML = `Error! You can't divide by 0! Restart by pressing CLEAR button !`;
    
    } 
    // else if (operator === '+' && firstNum !== '' && secondNum !== ''){
    //     addNumbers(firstNum,secondNum);
    //     resultDisplay.innerHTML = result;
    //     // firstNum = result;
    //     // resultDisplay.innerHTML = result;
 
    // } else if(operator === '-' && firstNum !== '' && secondNum !== ''){
    //     subtractNumbers(firstNum,secondNum); 
    //     resultDisplay.innerHTML = result;

    // } else if(operator === '*' && firstNum !== '' && secondNum !== ''){
    //     multiplyNumbers(firstNum,secondNum);  
    //     resultDisplay.innerHTML = result;

    // } 
    else if(operator === '/' && firstNum !== '' && secondNum !== '0' && secondNum !== ''){
        divideNumbers(firstNum,secondNum).toFixed(3);
        resultDisplay.innerHTML = result;

    } 
    // else if(operator === '/' && secondNum === '0' && firstNum !== ''){
        // for (const divideBy0 of errorDivide) {
        //    divideBy0.disabled = true;
        // }
        // resultDisplay.innerHTML = `Error! You can't divide by 0! Restart by pressing CLEAR button !`;     
// }
    //  else if(operator === '+' && firstNum !== '' && secondNum === ''){
    //     secondNum = firstNum;
    //     addNumbers(firstNum,secondNum);
    //     resultDisplay.innerHTML = result;

    // }  else if(operator === '-' && firstNum !== '' && secondNum === ''){
    //     secondNum = firstNum;
    //     subtractNumbers(firstNum,secondNum);
    //     resultDisplay.innerHTML = result;


    // } else if(operator === '*' && firstNum !== '' && secondNum === ''){
    //     secondNum = firstNum;
    //     multiplyNumbers(firstNum,secondNum);
    //     resultDisplay.innerHTML = result;

        
    // } 
    else if(operator === '/' && firstNum !== '' && secondNum === ''){
        secondNum = firstNum;
        divideNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } 
 

    // console.log('FINAL FIRSTNUM', firstNum);
    // console.log('operator', operator);
    // console.log('FINAL SECONDNUM', secondNum);
    flag = true;
}

//SELECTARE BUTON + - * /
let selectOperator = (e) => {
    flag = false;
    console.log("Flag: " , flag)
    operator = e.target.textContent;

    // resultDisplay.innerHTML = firstNum + operator + secondNum ; 


    console.log('operator', operator);
    //ADUNARE
    // if (operator === '+' && firstNum !== '' ){
    //     addNumbers(firstNum,secondNum);
    //     resultDisplay.innerHTML = result;
    //     // resultDisplay.innerHTML = addNumbers(firstNum,secondNum);
    //     console.log('1');
    // }  


    //SCADERE
    //else if(operator === '-' && firstNum !== ''){
    //     console.log(flag,'flag*')

    //     resultDisplay.innerHTML = subtractNumbers(firstNum,secondNum); 
    // }  


    //INMULTIRE
    // else if(operator === '*' && firstNum !== ''){
    //     console.log(flag,'flag*')
    //     console.log('1*');
    //     // multiplyNumbers(firstNum,secondNum);;
    //     console.log(multiplyNumbers(firstNum,secondNum), 'aici');
    //     resultDisplay.innerHTML = multiplyNumbers(firstNum,secondNum);
    //     console.log('2*');}
    // }  else


    //IMPARTIRE
      if(operator === '/' && secondNum === '0' && firstNum !== ''){
        for (const divideBy0 of errorDivide) {
           divideBy0.disabled = true;
        }
        resultDisplay.innerHTML = `Error! You can't divide by 0! Restart by pressing CLEAR button !`;
    }
       else if(operator === '/' && firstNum !== '' && secondNum !== '0'){
        console.log('1/');
        // divideNumbers(firstNum,secondNum);
        console.log(divideNumbers(firstNum,secondNum));
        resultDisplay.innerHTML = divideNumbers(firstNum,secondNum);
        console.log('2/');
    }


    resultDisplay.innerHTML = result;
    // firstNum = result;
    // secondNum = '';
    // resultDisplay.innerHTML = result ;
    console.log('am ajuns', result, firstNum, secondNum);


}

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


            // result = firstNum;
            // resultDisplay.innerHTML = result + operator ; 

        }
    }
}

function clearData(){
    firstNum = '0';
    secondNum = '';
    for (const divideBy0 of errorDivide) {
            divideBy0.disabled = false;

    }
    resultDisplay.innerHTML = firstNum;
}

function deleteNum(){
    firstNum = firstNum.slice(0, -1);
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

// Users should be able to string together several operations and 
//get the right answer, with each pair of numbers being evaluated at a time. 
//For example, 12 + 7 - 5 * 3 = should yield 42. 
//An example of the behavior we’re looking for would be this student solution.

// Your calculator should not evaluate more than a single pair of numbers 
//at a time. Example: you press a number button (12), followed by an operator
// button (+), a second number button (7), and finally a second operator 
//button (-). 
//Your calculator should then do the following: 
//first, evaluate the first pair of numbers (12 + 7), 
//second, display the result of that calculation (19), 
//and finally, use that result (19) as the first number in your 
//new calculation, along with the next operator (-).

// cand apas / * - + = numarul care il am/ rezultatul sa devina firstnum

//9+9+9 = result + 7 = etc