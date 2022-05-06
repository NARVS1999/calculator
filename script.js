function addNumber(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;

}

function subtractNumber(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function multiplyNumber(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2; 
}

function divideNumber(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return addNumber(num1, num2);
            break;
        case '-':
            return subtractNumber(num1, num2);
            break;
        case '*':
            return multiplyNumber(num1, num2);
            break;
        case '/':
            return divideNumber(num1, num2);
            break;    
    }
    
}

const displayScreen = document.querySelector('.onscreen-display');
const button1 = document.querySelector('.number-1');
const button2 = document.querySelector('.number-2');
const button3 = document.querySelector('.number-3');
const button4 = document.querySelector('.number-4');
const button5 = document.querySelector('.number-5');
const button6 = document.querySelector('.number-6');
const button7 = document.querySelector('.number-7');
const button8 = document.querySelector('.number-8');
const button9 = document.querySelector('.number-9');
const button0 = document.querySelector('.number-0');
const buttonPlus = document.querySelector('.plus-sign');
const buttonMinus = document.querySelector('.minus-sign');
const buttonMultiply = document.querySelector('.multiply-sign');
const buttonDivide = document.querySelector('.divide-sign');
const buttonEqual = document.querySelector('.equal-sign');
const buttonDelete = document.querySelector('.clear');
const buttonDotted = document.querySelector('.dotted-sign');
const buttonBack = document.querySelector('.back-space');

let num1 = '';
let num2 = '';
let operation = '';
let displayValue = '';
let answer = '';
let errorMessage = '';

function buttonOne() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '1';
        displayValue += '1'; 
    }
}

function buttonTwo() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '2';
        displayValue += '2'; 
    }
}

function buttonThree() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '3';
        displayValue += '3'; 
    }
}

function buttonFour() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '4';
        displayValue += '4'; 
    }
}

function buttonFive() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '5';
        displayValue += '5'; 
    }
}

function buttonSix() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '6';
        displayValue += '6'; 
    }
}

function buttonSeven() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '7';
        displayValue += '7'; 
    }
}

function buttonEight() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '8';
        displayValue += '8'; 
    }
}

function buttonNine() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '9';
        displayValue += '9'; 
    }
}

function buttonZero() {
    if(displayValue.length === 9) {
        return;
    } else {
        if(answer !== '' || errorMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '0';
        displayValue += '0'; 
    }
}

function plusOperation() {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '+';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '+';
        displayValue = '';
        num2 = '';
    }    
}

function minusOperation() {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '-';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '-';
        displayValue = '';
        num2 = '';
    }    
}

function multiplyOperation() {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '*';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '*';
        displayValue = '';
        num2 = '';
    }    
}

function divideOperation() {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '/';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '/';
        displayValue = '';
        num2 = '';
    }    
}

function equalOperation() {
    if(operation === '') {
        return;
    }
    calculate();
    num2 = '';
    num1 = '';
    operation = '';
    displayValue = '';
}

function deleteOperation() {
    displayScreen.textContent = '';
    num1 = '';
    num2 = '';
    operation = '';
    displayValue = '';
    answer = '';
}

function backOperation() {
    if(displayValue === '') {
        return;
    } else if(displayValue.length === 1) {
        displayScreen.textContent = '';
        displayValue = '';
    } else {
        let temp = displayValue;
        temp = temp.substring(0, temp.length-1);
        displayScreen.textContent = temp;
        displayValue = temp;
    }
}

function dottedOperation() {
    for(let i = 0; i < displayValue.length; i++) {
        if(displayValue[i] === '.') {
            return;
        }
    }
    displayScreen.textContent += ".";
    displayValue += '.';
}

function calculate() {
    num2 = Number(displayValue);
    if(num2 === 0) {
        errorMessage = 'error'
        displayScreen.textContent = errorMessage;
        num2 = '';
        num1 = '';
        operation = '';
        displayValue = '';
    } else {
        num1 = Number(operate(num1, num2, operation));
        num1.toFixed(1);
        displayScreen.textContent = num1;
        answer = num1;
    }
}

button1.addEventListener('click', buttonOne);
button2.addEventListener('click', buttonTwo);
button3.addEventListener('click', buttonThree);
button4.addEventListener('click', buttonFour);
button5.addEventListener('click', buttonFive);
button6.addEventListener('click', buttonSix);
button7.addEventListener('click', buttonSeven);
button8.addEventListener('click', buttonEight);
button9.addEventListener('click', buttonNine);
button0.addEventListener('click', buttonZero);
buttonPlus.addEventListener('click', plusOperation);
buttonMinus.addEventListener('click', minusOperation);
buttonMultiply.addEventListener('click', multiplyOperation);
buttonDivide.addEventListener('click', divideOperation);
buttonEqual.addEventListener('click', equalOperation);
buttonDelete.addEventListener('click', deleteOperation);
buttonBack.addEventListener('click', backOperation);
buttonDotted.addEventListener('click', dottedOperation);
window.addEventListener('keydown', pressNumber);

function pressNumber(e) {
    let key = e.keyCode;
    if(key === 49) {
        buttonOne();
    } else if (key === 77) {
        multiplyOperation();
    } else if (key === 80) {
        plusOperation();
    } else if (key === 50) {
       buttonTwo();
    } else if (key === 51) {
        buttonThree();
    } else if (key === 52) {
        buttonFour();
    } else if (key === 53) {
        buttonFive();
    } else if (key === 54) {
        buttonSix();
    } else if (key === 55) {
        buttonSeven();
    } else if (key === 56) {
        buttonEight();
    } else if (key === 57) {
        buttonNine();
    } else if (key === 48) {
        buttonZero();
    } else if (key === 8 ) {
        backOperation();
    } else if (key === 187 || key === 13) {
        equalOperation();
    } else if (key === 46) {
        deleteOperation();
    } else if (key === 189) {
        minusOperation();
    } else if (key === 191) {
        divideOperation();
    } else if (key === 190) {
        dottedOperation();
    } 
}

