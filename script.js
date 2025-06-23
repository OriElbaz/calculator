// VARIABLES
let operator = null;
let num1 = null;
let num2 = null;
let textNum1 = '';
let textNum2 = '';

// SCREEN VARIABLES
const answerText = document.querySelector('.answer-text');
const screenText = document.querySelector('.screen-text');

// TOP ROW BUTTON VARIABLES
const buttonClear = document.querySelector('.clear')
const buttonPoint = document.querySelector('.dot')
const buttonDel = document.querySelector('.del')

// OPERATION BUTTON VARIABALES
const buttonAdd = document.querySelector('.add');
const buttonSub = document.querySelector('.subtract');
const buttonMul = document.querySelector('.multiply');
const buttonDiv = document.querySelector('.divide');
const buttonEqual = document.querySelector('.equal');

// NUMBER BUTTON VARIABLES
const button9 = document.querySelector('.nine');
const button8 = document.querySelector('.eight');
const button7 = document.querySelector('.seven');
const button6 = document.querySelector('.six');
const button5 = document.querySelector('.five');
const button4 = document.querySelector('.four');
const button3 = document.querySelector('.three');
const button2 = document.querySelector('.two');
const button1 = document.querySelector('.one');
const button0 = document.querySelector('.zero');

// OPERATION FUNCTIONS
function add(num1, num2){
    return Number(num1) + Number(num2);
}
function subtract(num1, num2){
    return +num1 - +num2;
}
function multiply(num1, num2){
    return Number(num1) * Number(num2);
}
function divide(num1, num2){
    if (+num2 !== 0){
        return +num1 / +num2;
    } else {
        return 'error'
    }
    
}

// NUMBER EVENT LISTENERS
button0.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '0';
        
    } else {
        textNum2 += '0';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 0;
    }
})
button1.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '1';
        
    } else {
        textNum2 += '1';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 1;
    }
})
button2.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '2';
        
    } else {
        textNum2 += '2';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 2;
    }
    
})
button3.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '3';
        
    } else {
        textNum2 += '3';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 3;
    }
})
button4.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '4';
        
    } else {
        textNum2 += '4';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 4;
    }
})
button5.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '5';
        
    } else {
        textNum2 += '5';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 5;
    }
})
button6.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '6';
        
    } else {
        textNum2 += '6';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 6;
    }
})
button7.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '7';
        
    } else {
        textNum2 += '7';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 7;
    }
})
button8.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '8';
        
    } else {
        textNum2 += '8';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 8;
    }
})
button9.addEventListener('click', ()=>{
    if (num1 === null){
        textNum1 += '9';
        
    } else {
        textNum2 += '9';
        console.log(textNum2)
    }
    if (screenText.textContent.length < 10){
        answerText.textContent = '';
        screenText.textContent += 9;
    }
})
buttonPoint.addEventListener('click', ()=>{
    if (!(screenText.textContent.includes('.'))){
        if (num1 === null){
            textNum1 += '.';
        } else {
            textNum2 += '.';
            console.log(textNum2)
        }
        if (screenText.textContent.length < 10){
            answerText.textContent = '';
            screenText.textContent += '.';
        }
    }
})

// TOP ROW EVENT LISTENERS
buttonClear.addEventListener('click', ()=>{
    answerText.textContent = '';
    screenText.textContent = '';
    num1 = null;
    num2 = null;
    textNum1 = '';
    textNum2 = '';
    operator = null;
})
buttonDel.addEventListener('click', ()=>{
    if (screenText.textContent === textNum1){
       let newString = textNum1;
        textNum1 = newString.slice(-1)
        screenText.textContent = textNum1;
    } else {
        let newString = textNum2;
        textNum2 = newString.slice(-1)
        screenText.textContent = textNum2;
    }
})

// OPERATIONS EVENT LISTENERS
buttonAdd.addEventListener('click', ()=>{
    num1 = +textNum1;
    if (typeof(textNum2) !== 'number'){
        operator = '+';
    } else {
        num2 = +textNum2;
        if (operator !== null){
        textNum1 = operate(num1, num2, operator)
        num1 = +textNum1;
        textNum2 = '';
        num1 = +textNum2;
        operator = '+';
    } else {
        operator = '+';
    }
    }
    screenText.textContent = '';
})
buttonSub.addEventListener('click', ()=>{
    num1 = +textNum1;
    if (typeof(textNum2) !== 'number'){
        operator = '-';
    } else {
        num2 = +textNum2;
        if (operator !== null){
        textNum1 = operate(num1, num2, operator)
        num1 = +textNum1;
        textNum2 = '';
        num1 = +textNum2;
        operator = '-';
    } else {
        operator = '-';
    }
    }
    screenText.textContent = '';
})
buttonMul.addEventListener('click', ()=>{
    num1 = +textNum1;
    if (typeof(textNum2) !== 'number'){
        operator = '*';
    } else {
        num2 = +textNum2;
        if (operator !== null){
        textNum1 = operate(num1, num2, operator)
        num1 = +textNum1;
        textNum2 = '';
        num1 = +textNum2;
        operator = '*';
    } else {
        operator = '*';
    }
    }
    screenText.textContent = '';
})
buttonDiv.addEventListener('click', ()=>{
    num1 = +textNum1;
    if (typeof(textNum2) !== 'number'){
        operator = '/';
    } else {
        num2 = +textNum2;
        if (operator !== null){
        textNum1 = operate(num1, num2, operator)
        num1 = +textNum1;
        textNum2 = '';
        num1 = +textNum2;
        operator = '/';
    } else {
        operator = '/';
    }
    }
    screenText.textContent = '';
})
buttonEqual.addEventListener('click', ()=>{
    num1 = Number(textNum1)
    num2 = Number(textNum2)
    console.log(num1)
    let answer = operate(num1, num2, operator);
    // IF ANSWER GREATER THAN X DIGITS THEN>>>>>
    if (String(answer).length < 10){
    screenText.textContent = answer;
    answerText.textContent = '';
    num1 = answer;
    num2 = '';
    textNum1 = answer;
    textNum2 = '';
    console.log('num one is ', textNum1)
    console.log('Answer is: ', answer)
    } else {
    screenText.textContent = '9999999999';
    answerText.textContent = '';
    num1 = null;
    num2 = null;
    textNum1 = '';
    textNum2 = '';
    operator = null;
    }
    
    
})

// OPERATE FUNCTION
function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }   
}
